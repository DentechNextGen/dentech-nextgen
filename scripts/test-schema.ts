import { globSync } from 'glob'
import { readFileSync } from 'fs'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { parse } from '@typescript-eslint/parser'
import { resolve } from 'path'
import chalk from 'chalk'

const ajv = new Ajv({ allErrors: true })
addFormats(ajv)

// Load Schema.org schemas
const schemaOrgSpecs = {
  Organization: {
    type: 'object',
    required: ['@context', '@type', 'name', 'url'],
    properties: {
      '@context': { const: 'https://schema.org' },
      '@type': { const: 'Organization' },
      name: { type: 'string' },
      url: { type: 'string', format: 'uri' },
      logo: { 
        oneOf: [
          { type: 'string', format: 'uri' },
          { 
            type: 'object',
            required: ['@type', 'url'],
            properties: {
              '@type': { const: 'ImageObject' },
              url: { type: 'string', format: 'uri' },
              width: { type: 'number' },
              height: { type: 'number' }
            }
          }
        ]
      },
      description: { type: 'string' },
      sameAs: { type: 'array', items: { type: 'string', format: 'uri' } }
    }
  },
  SoftwareApplication: {
    type: 'object',
    required: ['@context', '@type', 'name', 'description'],
    properties: {
      '@context': { const: 'https://schema.org' },
      '@type': { const: 'SoftwareApplication' },
      name: { type: 'string' },
      description: { type: 'string' },
      applicationCategory: { type: 'string' },
      operatingSystem: { type: 'string' },
      offers: {
        type: 'object',
        required: ['@type', 'priceCurrency'],
        properties: {
          '@type': { const: 'Offer' },
          price: { type: 'string' },
          priceCurrency: { type: 'string' },
          availability: { type: 'string' }
        }
      },
      aggregateRating: {
        type: 'object',
        required: ['@type', 'ratingValue'],
        properties: {
          '@type': { const: 'AggregateRating' },
          ratingValue: { type: 'string' },
          ratingCount: { type: 'string' }
        }
      }
    }
  },
  Service: {
    type: 'object',
    required: ['@context', '@type', 'name', 'description'],
    properties: {
      '@context': { const: 'https://schema.org' },
      '@type': { const: 'Service' },
      name: { type: 'string' },
      description: { type: 'string' },
      provider: { 
        type: 'object',
        required: ['@type', 'name'],
        properties: {
          '@type': { const: 'Organization' },
          name: { type: 'string' },
          url: { type: 'string', format: 'uri' }
        }
      },
      serviceType: { type: 'string' },
      availableChannel: {
        type: 'object',
        required: ['@type'],
        properties: {
          '@type': { const: 'ServiceChannel' },
          serviceUrl: { type: 'string', format: 'uri' },
          servicePhone: { type: 'string' }
        }
      }
    }
  },
  FAQPage: {
    type: 'object',
    required: ['@context', '@type', 'mainEntity'],
    properties: {
      '@context': { const: 'https://schema.org' },
      '@type': { const: 'FAQPage' },
      mainEntity: {
        type: 'array',
        items: {
          type: 'object',
          required: ['@type', 'name', 'acceptedAnswer'],
          properties: {
            '@type': { const: 'Question' },
            name: { type: 'string' },
            acceptedAnswer: {
              type: 'object',
              required: ['@type', 'text'],
              properties: {
                '@type': { const: 'Answer' },
                text: { type: 'string' }
              }
            }
          }
        }
      }
    }
  },
  Article: {
    type: 'object',
    required: ['@context', '@type', 'headline', 'description', 'author'],
    properties: {
      '@context': { const: 'https://schema.org' },
      '@type': { const: 'Article' },
      headline: { type: 'string' },
      description: { type: 'string' },
      datePublished: { type: 'string', format: 'date-time' },
      dateModified: { type: 'string', format: 'date-time' },
      author: {
        type: 'object',
        required: ['@type', 'name'],
        properties: {
          '@type': { const: 'Person' },
          name: { type: 'string' }
        }
      },
      image: {
        oneOf: [
          { type: 'string', format: 'uri' },
          {
            type: 'object',
            required: ['@type', 'url'],
            properties: {
              '@type': { const: 'ImageObject' },
              url: { type: 'string', format: 'uri' },
              caption: { type: 'string' }
            }
          }
        ]
      }
    }
  },
  BreadcrumbList: {
    type: 'object',
    required: ['@context', '@type', 'itemListElement'],
    properties: {
      '@context': { const: 'https://schema.org' },
      '@type': { const: 'BreadcrumbList' },
      itemListElement: {
        type: 'array',
        items: {
          type: 'object',
          required: ['@type', 'position', 'name', 'item'],
          properties: {
            '@type': { const: 'ListItem' },
            position: { type: 'number' },
            name: { type: 'string' },
            item: { type: 'string', format: 'uri' }
          }
        }
      }
    }
  },
  WebSite: {
    type: 'object',
    required: ['@context', '@type', 'name', 'url'],
    properties: {
      '@context': { const: 'https://schema.org' },
      '@type': { const: 'WebSite' },
      name: { type: 'string' },
      description: { type: 'string' },
      url: { type: 'string', format: 'uri' },
      potentialAction: {
        type: 'object',
        required: ['@type', 'target'],
        properties: {
          '@type': { const: 'SearchAction' },
          target: {
            type: 'object',
            required: ['@type', 'urlTemplate'],
            properties: {
              '@type': { const: 'EntryPoint' },
              urlTemplate: { type: 'string' }
            }
          }
        }
      }
    }
  },
  CollectionPage: {
    type: 'object',
    required: ['@context', '@type', 'name'],
    properties: {
      '@context': { const: 'https://schema.org' },
      '@type': { const: 'CollectionPage' },
      name: { type: 'string' },
      description: { type: 'string' },
      publisher: {
        type: 'object',
        required: ['@type', 'name'],
        properties: {
          '@type': { const: 'Organization' },
          name: { type: 'string' },
          url: { type: 'string', format: 'uri' }
        }
      }
    }
  },
  Product: {
    type: 'object',
    required: ['@context', '@type', 'name'],
    properties: {
      '@context': { const: 'https://schema.org' },
      '@type': { const: 'Product' },
      name: { type: 'string' },
      description: { type: 'string' },
      brand: {
        type: 'object',
        required: ['@type', 'name'],
        properties: {
          '@type': { const: 'Brand' },
          name: { type: 'string' }
        }
      },
      image: {
        type: 'object',
        required: ['@type', 'url'],
        properties: {
          '@type': { const: 'ImageObject' },
          url: { type: 'string', format: 'uri' },
          caption: { type: 'string' }
        }
      }
    }
  }
}

interface SchemaValidationResult {
  file: string
  schema: any
  valid: boolean
  errors?: any[]
}

async function findSchemaFiles(): Promise<string[]> {
  return globSync([
    'app/**/metadata.ts',
    'app/**/page.tsx',
    'components/**/*.tsx'
  ])
}

function extractSchemaFromFile(filePath: string): any[] {
  const content = readFileSync(filePath, 'utf-8')
  const ast = parse(content, {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true }
  })

  const schemas: any[] = []
  
  function visit(node: any) {
    // Handle metadata objects in Next.js
    if (
      node.type === 'VariableDeclarator' &&
      (node.id.name === 'metadata' || node.id.name === 'schemas')
    ) {
      try {
        const metadataObj = extractObjectLiteral(node.init)
        if (metadataObj.other && metadataObj.other['script:ld+json']) {
          let schemaContent = metadataObj.other['script:ld+json']
          if (typeof schemaContent === 'string') {
            try {
              schemaContent = JSON.parse(schemaContent)
            } catch (e) {
              console.error(`Error parsing JSON string in ${filePath}:`, e)
            }
          }
          if (Array.isArray(schemaContent)) {
            schemas.push(...schemaContent)
          } else if (schemaContent) {
            schemas.push(schemaContent)
          }
        }
      } catch (e) {
        console.error(`Error extracting schema from metadata in ${filePath}:`, e)
      }
    }
    // Handle direct schema assignments
    else if (
      node.type === 'VariableDeclarator' &&
      node.init?.type === 'ObjectExpression'
    ) {
      const obj = extractObjectLiteral(node.init)
      if (obj['@type'] && obj['@context'] === 'https://schema.org') {
        schemas.push(obj)
      }
    }
    // Handle function calls that generate schemas
    else if (
      node.type === 'CallExpression' &&
      node.callee.type === 'Identifier' &&
      node.callee.name.startsWith('generate') &&
      node.callee.name.endsWith('Schema')
    ) {
      try {
        const schemaObj = extractFunctionCall(node)
        if (schemaObj) {
          schemas.push(schemaObj)
        }
      } catch (e) {
        console.error(`Error extracting schema from function call in ${filePath}:`, e)
      }
    }

    for (const key in node) {
      if (node[key] && typeof node[key] === 'object') {
        visit(node[key])
      }
    }
  }

  function extractFunctionCall(node: any): any {
    const args = node.arguments.map((arg: any) => {
      if (arg.type === 'ObjectExpression') {
        return extractObjectLiteral(arg)
      }
      if (arg.type === 'ArrayExpression') {
        return arg.elements.map((element: any) => {
          if (element.type === 'ObjectExpression') {
            return extractObjectLiteral(element)
          }
          if (element.type === 'Literal') {
            return element.value
          }
          return null
        }).filter(Boolean)
      }
      if (arg.type === 'Literal') {
        return arg.value
      }
      return null
    })

    // Reconstruct schema based on function name
    const funcName = node.callee.name
    switch (funcName) {
      case 'generateSoftwareSchema':
        return {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: args[0],
          description: args[1],
          ...args[2]
        }
      case 'generateArticleSchema':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          ...args[0]
        }
      case 'generateFAQSchema':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: args[0].map((q: any) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer
            }
          }))
        }
      case 'generateBreadcrumbSchema':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: args[0].map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.item
          }))
        }
      default:
        return null
    }
  }

  function extractObjectLiteral(node: any): any {
    if (!node || !node.type) return null
    
    const obj: any = {}
    
    if (node.type === 'ObjectExpression') {
      for (const prop of node.properties) {
        const key = prop.key.name || prop.key.value
        
        if (prop.value.type === 'Literal') {
          obj[key] = prop.value.value
        }
        else if (prop.value.type === 'ObjectExpression') {
          obj[key] = extractObjectLiteral(prop.value)
        }
        else if (prop.value.type === 'ArrayExpression') {
          obj[key] = prop.value.elements.map((element: any) => {
            if (element.type === 'ObjectExpression') {
              return extractObjectLiteral(element)
            }
            if (element.type === 'Literal') {
              return element.value
            }
            return null
          }).filter(Boolean)
        }
        else if (prop.value.type === 'TemplateLiteral') {
          obj[key] = prop.value.quasis[0].value.raw
        }
        else if (prop.value.type === 'CallExpression') {
          if (
            prop.value.callee.type === 'Identifier' &&
            prop.value.callee.name === 'JSON.stringify'
          ) {
            const arg = prop.value.arguments[0]
            if (arg.type === 'ArrayExpression') {
              obj[key] = arg.elements.map((element: any) => {
                if (element.type === 'ObjectExpression') {
                  return extractObjectLiteral(element)
                }
                return null
              }).filter(Boolean)
            } else if (arg.type === 'ObjectExpression') {
              obj[key] = extractObjectLiteral(arg)
            }
          }
        }
      }
    }
    
    return obj
  }

  visit(ast)
  return schemas
}

function validateSchema(schema: any): boolean {
  const schemaType = schema['@type']
  const validator = schemaOrgSpecs[schemaType]
  
  if (!validator) {
    console.warn(chalk.yellow(`No validator found for schema type: ${schemaType}`))
    return true
  }

  return ajv.validate(validator, schema)
}

async function validateAllSchemas(): Promise<SchemaValidationResult[]> {
  const files = await findSchemaFiles()
  const results: SchemaValidationResult[] = []

  console.log(chalk.blue('\nScanning files for schemas:'))
  
  for (const file of files) {
    const schemas = extractSchemaFromFile(file)
    console.log(chalk.cyan(`\n📄 ${file} (${schemas.length} schemas found)`))
    
    for (const schema of schemas) {
      const schemaType = schema['@type']
      console.log(chalk.yellow(`  ⚡ Testing ${schemaType} schema`))
      
      const valid = validateSchema(schema)
      results.push({
        file,
        schema,
        valid,
        errors: valid ? undefined : ajv.errors
      })

      if (!valid) {
        console.log(chalk.red(`    ❌ Invalid schema:`))
        console.log(chalk.red(JSON.stringify(ajv.errors, null, 2)))
      } else {
        console.log(chalk.green(`    ✓ Schema is valid`))
      }
    }
  }

  return results
}

// Run the validation
console.log(chalk.blue('🔍 Starting schema validation...'))

validateAllSchemas().then(results => {
  let hasErrors = false
  let totalSchemas = 0
  let validSchemas = 0

  results.forEach(result => {
    totalSchemas++
    if (result.valid) {
      validSchemas++
    } else {
      hasErrors = true
    }
  })

  console.log(chalk.blue(`\n📊 Validation Summary:`))
  console.log(chalk.blue(`Total schemas validated: ${totalSchemas}`))
  console.log(chalk.green(`Valid schemas: ${validSchemas}`))
  console.log(chalk.red(`Invalid schemas: ${totalSchemas - validSchemas}`))

  if (hasErrors) {
    console.log(chalk.red('\n❌ Schema validation failed'))
    process.exit(1)
  } else {
    console.log(chalk.green('\n✅ All schemas are valid'))
  }
}).catch(error => {
  console.error(chalk.red('Error running schema validation:'), error)
  process.exit(1)
}) 