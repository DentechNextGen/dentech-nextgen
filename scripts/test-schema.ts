import { glob } from 'glob'
import { readFileSync } from 'fs'
import chalk from 'chalk'
import { practiceManagementSchema, voiceChartingSchema, documentManagementSchema, patientCommunicationSchema, digitalImagingSchema } from '../lib/schema/software'
import { generateBreadcrumbSchema } from '../lib/schema'
import { siteConfig } from '../src/config'

// Schema.org core validation
function validateSchema(schema: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Basic schema.org requirements
  if (!schema['@context'] || schema['@context'] !== 'https://schema.org') {
    errors.push('Missing or invalid @context (must be "https://schema.org")')
  }

  if (!schema['@type']) {
    errors.push('Missing @type')
  }

  // Type-specific validation
  switch (schema['@type']) {
    case 'SoftwareApplication':
      if (!schema.name) errors.push('Missing name')
      if (!schema.description) errors.push('Missing description')
      if (!schema.applicationCategory) errors.push('Missing applicationCategory')
      if (schema.screenshot) {
        if (!Array.isArray(schema.screenshot)) {
          errors.push('screenshot must be an array')
        } else {
          schema.screenshot.forEach((img, idx) => {
            if (!img['@type'] || img['@type'] !== 'ImageObject') {
              errors.push(`screenshot[${idx}] must have @type: "ImageObject"`)
            }
            if (!img.url) errors.push(`screenshot[${idx}] missing url`)
          })
        }
      }
      if (schema.offers) {
        if (!schema.offers['@type'] || schema.offers['@type'] !== 'Offer') {
          errors.push('offers must have @type: "Offer"')
        }
      }
      break

    case 'BreadcrumbList':
      if (!schema.itemListElement) {
        errors.push('Missing itemListElement')
      } else if (!Array.isArray(schema.itemListElement)) {
        errors.push('itemListElement must be an array')
      } else {
        schema.itemListElement.forEach((item, idx) => {
          if (!item['@type'] || item['@type'] !== 'ListItem') {
            errors.push(`itemListElement[${idx}] must have @type: "ListItem"`)
          }
          if (!item.position) errors.push(`itemListElement[${idx}] missing position`)
          if (!item.name) errors.push(`itemListElement[${idx}] missing name`)
          if (!item.item) errors.push(`itemListElement[${idx}] missing item`)
        })
      }
      break

    case 'Organization':
      if (!schema.name) errors.push('Missing name')
      if (!schema.url) errors.push('Missing url')
      if (schema.logo) {
        if (typeof schema.logo === 'object') {
          if (!schema.logo['@type'] || schema.logo['@type'] !== 'ImageObject') {
            errors.push('logo object must have @type: "ImageObject"')
          }
          if (!schema.logo.url) errors.push('logo object missing url')
        }
      }
      break

    case 'WebSite':
      if (!schema.name) errors.push('Missing name')
      if (!schema.url) errors.push('Missing url')
      break

    default:
      errors.push(`Unknown schema type: ${schema['@type']}`)
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Test predefined schemas
function testPredefinedSchemas() {
  console.log(chalk.blue('\n🔍 Testing predefined schemas...'))
  
  const schemas = {
    'Practice Management': practiceManagementSchema,
    'Voice Charting': voiceChartingSchema,
    'Document Management': documentManagementSchema,
    'Patient Communication': patientCommunicationSchema,
    'Digital Imaging': digitalImagingSchema
  }

  let validCount = 0
  let invalidCount = 0

  for (const [name, schema] of Object.entries(schemas)) {
    console.log(chalk.cyan(`\nTesting ${name} schema:`))
    const { isValid, errors } = validateSchema(schema)
    
    if (isValid) {
      console.log(chalk.green('✓ Valid schema'))
      validCount++
    } else {
      console.log(chalk.red('❌ Invalid schema:'))
      errors.forEach(error => console.log(chalk.red(`  - ${error}`)))
      invalidCount++
    }
  }

  return { validCount, invalidCount }
}

// Test breadcrumb schema generator
function testBreadcrumbGenerator() {
  console.log(chalk.blue('\n🔍 Testing breadcrumb schema generator...'))
  
  const testCases = [
    [
      { name: 'Home', item: 'https://dentech.com/' },
      { name: 'Features', item: 'https://dentech.com/features' }
    ],
    [
      { name: 'Home', item: 'https://dentech.com/' },
      { name: 'Features', item: 'https://dentech.com/features' },
      { name: 'Practice Management', item: 'https://dentech.com/features/practice-management' }
    ]
  ]

  let validCount = 0
  let invalidCount = 0

  for (const items of testCases) {
    console.log(chalk.cyan(`\nTesting breadcrumb with ${items.length} items:`))
    const schema = generateBreadcrumbSchema(items)
    const { isValid, errors } = validateSchema(schema)
    
    if (isValid) {
      console.log(chalk.green('✓ Valid schema'))
      validCount++
    } else {
      console.log(chalk.red('❌ Invalid schema:'))
      errors.forEach(error => console.log(chalk.red(`  - ${error}`)))
      invalidCount++
    }
  }

  return { validCount, invalidCount }
}

async function main() {
  console.log(chalk.blue('🔍 Starting schema validation...'))

  // Test predefined schemas
  const { validCount: validSchemas, invalidCount: invalidSchemas } = testPredefinedSchemas()

  // Test breadcrumb generator
  const { validCount: validBreadcrumbs, invalidCount: invalidBreadcrumbs } = testBreadcrumbGenerator()

  // Summary
  console.log(chalk.blue('\n📊 Validation Summary:'))
  console.log(`Software schemas: ${validSchemas} valid, ${invalidSchemas} invalid`)
  console.log(`Breadcrumb schemas: ${validBreadcrumbs} valid, ${invalidBreadcrumbs} invalid`)

  if (invalidSchemas > 0 || invalidBreadcrumbs > 0) {
    console.log(chalk.red('\n❌ Schema validation failed'))
    process.exit(1)
  } else {
    console.log(chalk.green('\n✅ All schemas are valid'))
  }
}

main() 