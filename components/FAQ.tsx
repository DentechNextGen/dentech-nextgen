const faqs = [
  {
    question: 'What hardware and internet connectivity is recommended for Dentech NextGen?',
    answer: 'For optimal performance of Dentech NextGen, please refer to the hardware specifications and internet connectivity guidelines listed on our resource page. It is essential to meet these requirements to ensure the software runs smoothly and efficiently in your dental practice.'
  },
  {
    question: 'What is included when signing up for Dentech NextGen?',
    answer: 'Our comprehensive service package includes dedicated phone and email support available Monday through Friday, regular updates and enhancements to keep your software up-to-date with the latest features, access to an extensive library of training videos, and the assurance of a robust and efficient software system designed for the modern dental practice.'
  },
  {
    question: 'How do I convert my existing practice to Dentech?',
    answer: 'With decades of knowledge and vast experience Dentech\'s conversion team can assist with any conversion from any software platform. A dedicated team will assist you step by step in the process to ensure that the data you need is both there and accurate to make your transition to Dentech as smooth as possible. Call 800.233.4998 ext. 239 or email info@dentech.com'
  }
]

export default function FAQ() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-10">Frequently asked questions</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div 
                key={faq.question} 
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow"
              >
                <h3 className="text-base font-semibold leading-7 text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 