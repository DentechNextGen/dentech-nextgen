import { BaseSchema } from '.'

export interface FAQPageSchema extends BaseSchema {
  '@type': 'FAQPage'
  mainEntity: {
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }[]
}

export function generateFAQSchema(questions: { question: string; answer: string }[]): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  }
}

// Pre-defined FAQ schema for support page
export const supportFAQSchema = generateFAQSchema([
  {
    question: 'How do I get started with Dentech?',
    answer: 'Contact our sales team for a personalized demo and consultation. We\'ll guide you through the implementation process and provide comprehensive training for your staff.'
  },
  {
    question: 'What technical support options are available?',
    answer: 'We offer 24/7 technical support through phone, email, and live chat. Our dedicated support team is always ready to assist you with any questions or issues.'
  },
  {
    question: 'Is Dentech HIPAA compliant?',
    answer: 'Yes, Dentech is fully HIPAA compliant. We implement industry-standard security measures and encryption to protect patient data and ensure regulatory compliance.'
  },
  {
    question: 'Can I migrate data from my current system?',
    answer: 'Yes, we provide comprehensive data migration services. Our team will work with you to ensure a smooth transition from your current system to Dentech.'
  },
  {
    question: 'What training resources are available?',
    answer: 'We offer comprehensive training resources including live training sessions, video tutorials, documentation, and ongoing support to ensure your team can maximize the benefits of Dentech.'
  }
]) 