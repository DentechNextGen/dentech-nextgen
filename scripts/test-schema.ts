import chalk from 'chalk'
import {
  practiceManagementSchema,
  voiceChartingSchema,
  documentManagementSchema,
  patientCommunicationSchema,
  digitalImagingSchema,
  patientCheckInSchema,
  eservicesSchema
} from '../lib/schema/software'
import { supportFAQSchema } from '../lib/schema/faq'
import { testimonialReviews, dentechAggregateRating } from '../lib/schema/review'
import { generateBreadcrumbSchema } from '../lib/schema/breadcrumb'
import { siteConfig } from '../src/config'

interface SchemaValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
  type: string
  name: string
}

// SEO-specific validation rules
function validateSEORequirements(schema: any): string[] {
  const errors: string[] = []

  // Check for required SEO fields based on schema type
  switch (schema['@type']) {
    case 'SoftwareApplication':
      if (!schema.name) errors.push('Missing name (required for software rich results)')
      if (!schema.description) errors.push('Missing description (important for software rich results)')
      if (!schema.applicationCategory) errors.push('Missing applicationCategory (helps with software categorization)')
      if (!schema.offers) errors.push('Missing offers (required for software rich results)')
      break

    case 'FAQPage':
      if (!schema.mainEntity?.length) errors.push('FAQ page must have at least one question-answer pair')
      schema.mainEntity?.forEach((qa: any, index: number) => {
        if (!qa.name) errors.push(`FAQ #${index + 1}: Missing question text`)
        if (!qa.acceptedAnswer?.text) errors.push(`FAQ #${index + 1}: Missing answer text`)
      })
      break

    case 'Review':
      if (!schema.reviewRating) errors.push('Missing reviewRating (required for review rich results)')
      if (!schema.author) errors.push('Missing author (required for review rich results)')
      if (!schema.reviewBody) errors.push('Missing reviewBody (required for review rich results)')
      break

    case 'AggregateRating':
      if (!schema.ratingValue) errors.push('Missing ratingValue (required for aggregate rating)')
      if (!schema.ratingCount) errors.push('Missing ratingCount (required for aggregate rating)')
      if (!schema.bestRating) errors.push('Missing bestRating (required for aggregate rating)')
      break
  }

  return errors
}

// SEO best practices validation
function validateSEOBestPractices(schema: any): string[] {
  const warnings: string[] = []

  // Check description length (Google typically displays ~155-160 characters)
  if (schema.description && schema.description.length > 160) {
    warnings.push('Description exceeds 160 characters, may be truncated in search results')
  }

  // Check name/headline length (Google typically displays ~60 characters)
  if (schema.name && schema.name.length > 60) {
    warnings.push('Name exceeds 60 characters, may be truncated in search results')
  }

  // Check for recommended fields based on type
  switch (schema['@type']) {
    case 'SoftwareApplication':
      if (!schema.aggregateRating) warnings.push('Missing aggregateRating (recommended for software rich results)')
      if (!schema.review) warnings.push('Missing review (recommended for software rich results)')
      if (!schema.screenshot?.length) warnings.push('Missing screenshots (recommended for software rich results)')
      break

    case 'Review':
      if (!schema.datePublished) warnings.push('Missing datePublished (recommended for review rich results)')
      if (!schema.itemReviewed) warnings.push('Missing itemReviewed (recommended for review rich results)')
      break
  }

  return warnings
}

function validateSchema(schema: any, name: string): SchemaValidationResult {
  try {
    // Validate basic Schema.org structure
    if (!schema['@context'] || schema['@context'] !== 'https://schema.org') {
      return {
        isValid: false,
        errors: ['Invalid or missing @context - must be "https://schema.org"'],
        warnings: [],
        type: schema['@type'] || 'unknown',
        name
      }
    }

    if (!schema['@type']) {
      return {
        isValid: false,
        errors: ['Missing @type'],
        warnings: [],
        type: 'unknown',
        name
      }
    }

    // Validate SEO requirements and best practices
    const errors = validateSEORequirements(schema)
    const warnings = validateSEOBestPractices(schema)

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      type: schema['@type'],
      name
    }
  } catch (error) {
    console.error(chalk.red('Error during schema validation:'), error)
    return {
      isValid: false,
      errors: ['Schema validation failed'],
      warnings: [],
      type: schema['@type'] || 'unknown',
      name
    }
  }
}

function printValidationResult(result: SchemaValidationResult) {
  const icon = result.isValid ? '✓' : '✗'
  const color = result.isValid ? chalk.green : chalk.red
  
  console.log(color(`\n${icon} Schema Type: ${result.type}`))
  console.log(chalk.blue(`Name: ${result.name}`))
  
  if (result.errors.length > 0) {
    console.log(chalk.red('\nErrors:'))
    result.errors.forEach(error => {
      console.log(chalk.red(`• ${error}`))
    })
  }

  if (result.warnings.length > 0) {
    console.log(chalk.yellow('\nWarnings:'))
    result.warnings.forEach(warning => {
      console.log(chalk.yellow(`• ${warning}`))
    })
  }

  if (result.isValid && result.warnings.length === 0) {
    console.log(chalk.green('\n✓ Schema is valid and follows SEO best practices'))
  }
}

function validateSchemas() {
  console.log(chalk.blue('🔍 Validating Schema.org markup...'))

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: siteConfig.url },
    { name: 'Features', item: `${siteConfig.url}/features` },
    { name: 'Practice Management', item: `${siteConfig.url}/features/practice-management` }
  ])

  const schemas = [
    { schema: practiceManagementSchema, name: 'Practice Management' },
    { schema: voiceChartingSchema, name: 'Voice Charting' },
    { schema: documentManagementSchema, name: 'Document Management' },
    { schema: patientCommunicationSchema, name: 'Patient Communication' },
    { schema: digitalImagingSchema, name: 'Digital Imaging' },
    { schema: patientCheckInSchema, name: 'Patient Check-In' },
    { schema: eservicesSchema, name: 'E-Services' },
    { schema: supportFAQSchema, name: 'FAQ' },
    { schema: breadcrumbSchema, name: 'Breadcrumb Navigation' },
    ...testimonialReviews.map((review, index) => ({ 
      schema: review, 
      name: `Testimonial Review ${index + 1}` 
    })),
    { schema: dentechAggregateRating, name: 'Aggregate Rating' }
  ]

  let totalSchemas = 0
  let validSchemas = 0
  let schemasWithWarnings = 0

  for (const { schema, name } of schemas) {
    totalSchemas++
    const result = validateSchema(schema, name)
    printValidationResult(result)

    if (result.isValid) validSchemas++
    if (result.warnings.length > 0) schemasWithWarnings++
  }

  console.log(chalk.blue('\nValidation Summary:'))
  console.log(chalk.white(`Total Schemas: ${totalSchemas}`))
  console.log(chalk.green(`Valid Schemas: ${validSchemas}`))
  console.log(chalk.yellow(`Schemas with Warnings: ${schemasWithWarnings}`))
  console.log(chalk.red(`Invalid Schemas: ${totalSchemas - validSchemas}`))
}

console.log(chalk.blue('🔍 Starting Schema.org SEO validation...'))
console.log(chalk.yellow('Checking for SEO requirements and best practices...'))
validateSchemas() 