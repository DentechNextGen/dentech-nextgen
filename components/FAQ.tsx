const faqs = [
  {
    question: "What hardware and internet connectivity is recommended for Dentech NextGen?",
    answer: "For optimal performance of Dentech NextGen, please refer to the hardware specifications and internet connectivity guidelines listed on our resource page. It is essential to meet these requirements to ensure the software runs smoothly and efficiently in your dental practice."
  },
  {
    question: "What is included when signing up for Dentech NextGen?",
    answer: "Our comprehensive service package includes dedicated phone and email support available Monday through Friday, regular updates and enhancements to keep your software up-to-date with the latest features, access to an extensive library of training videos, and the assurance of a robust and efficient software system designed for the modern dental practice."
  },
  {
    question: "How do I convert my existing practice to Dentech?",
    answer: "With decades of knowledge and vast experience Dentech's conversion team can assist with any conversion from any software platform. A dedicated team will assist you step by step in the process to ensure that the data you need is both there and accurate to make your transition to Dentech as smooth as possible. Call 800.233.4998 ext. 239 or email info@dentech.com"
  },
  {
    question: "How is patient data transferred to Dentech NextGen?",
    answer: "We make the transition seamless by providing specialized conversion programs designed to import data from competitor software. Our process involves running a trial conversion to ensure data integrity, followed by the final conversion to securely transfer all your patient data to Dentech NextGen."
  },
  {
    question: "How can users stay updated on Dentech NextGen features?",
    answer: "Stay informed about the latest Dentech NextGen features and updates through our informative newsletter, regularly updated blog, and convenient pop-up displays within the software that highlight recent enhancements and tips for using new functionalities."
  },
  {
    question: "What are the system requirements for Dentech?",
    answer: "Dentech solutions strongly adhere to compliance with MICROSOFT WINDOWS operating systems and specified hardware requirements herein. The entire Dentech solution suite has been tested and certified using the system requirements described herein. Any deviation may result in unpredictable behavior and/or poor performance."
  },
  {
    question: "I'm currently using Dentech Legacy, how do I switch to NextGen?",
    answer: "Transitioning from Dentech Legacy to NextGen is straightforward. Call us today to speak with one of our customer service representatives who will guide you through the process and answer any questions you may have. We're committed to ensuring a smooth upgrade experience for all our clients."
  },
  {
    question: "What type of initial training does Dentech provide?",
    answer: "We offer personalized 1-on-1 training sessions that can be conducted remotely or on-site, depending on your preference and location. Our goal is to ensure that you and your staff are fully comfortable and proficient in using Dentech NextGen from day one."
  },
  {
    question: "Do you offer financing plans?",
    answer: "We offer a variety of options that best fit your financial needs. From leasing, financing to payment plans, Dentech has the financial plan that will work with you. For more information or to get in contact with a sales representative who can answer your questions, please email sales@dentech.com or call 800.233.4998 ext. 239."
  }
]

export default function FAQ() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">{faq.question}</h3>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 