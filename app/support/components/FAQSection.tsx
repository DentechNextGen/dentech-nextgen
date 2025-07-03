import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-none"
    >
      <motion.button
        className="w-full py-6 flex justify-between items-center gap-4 group text-left"
        onClick={onToggle}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <motion.h3 
          className="text-lg font-medium text-gray-900 group-hover:text-[#92c353] transition-colors duration-200"
          layout
        >
          {question}
        </motion.h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDownIcon className="h-6 w-6 text-[#92c353] group-hover:scale-110 transition-transform duration-200" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginBottom: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              marginBottom: "1.5rem",
              transition: { 
                height: { duration: 0.3 },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              marginBottom: 0,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <motion.p 
              className="text-gray-600 pb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What hardware and internet connectivity is recommended for Dentech NextGen?',
      answer: 'For optimal performance, we recommend a modern computer with Windows 10 or higher, 8GB RAM minimum (16GB recommended), and a stable high-speed internet connection.'
    },
    {
      question: 'What is included when signing up for Dentech NextGen?',
      answer: 'Your subscription includes the full software suite, unlimited support, regular updates, data backup, and initial training for your team.'
    },
    {
      question: 'How do I convert my existing practice to Dentech?',
      answer: 'Our team provides comprehensive data migration services and will work with you to ensure a smooth transition from your current system.'
    },
    {
      question: 'How is patient data transferred to Dentech NextGen?',
      answer: 'We use secure, encrypted protocols to transfer your patient data. Our team handles the entire migration process while ensuring HIPAA compliance.'
    },
    {
      question: 'How can users stay updated on Dentech NextGen features?',
      answer: 'We provide regular email updates, in-app notifications, and maintain a blog with detailed information about new features and improvements.'
    },
    {
      question: 'What are the system requirements for Dentech?',
      answer: 'Dentech requires Windows 10 or higher, 8GB RAM minimum (16GB recommended), and a high-speed internet connection for optimal performance.'
    },
    {
      question: 'I\'m currently using Dentech Legacy, how do I switch to NextGen?',
      answer: 'Contact our support team to schedule your migration. We\'ll provide a seamless transition plan and ensure all your data is transferred correctly.'
    },
    {
      question: 'What type of initial training does Dentech provide?',
      answer: 'We offer comprehensive online training sessions, video tutorials, and documentation. Additional personalized training can be arranged if needed.'
    },
    {
      question: 'Do you offer financing plans?',
      answer: 'Yes, we offer flexible financing options to help make the transition to Dentech NextGen more manageable. Contact our sales team for details.'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Dentech. Can&apos;t find what you&apos;re looking for? 
            Our support team is here to help.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto rounded-2xl bg-white p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection; 