import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface PopUpProps {
  title: string;
  content: string;
  ctaText: string;
  ctaLink: string;
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ title, content, ctaText, ctaLink, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Popup Content */}
      <motion.div 
        className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl max-w-lg w-full mx-auto overflow-hidden z-50"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-radial from-[#92c353]/20 via-[#92c353]/10 to-transparent rounded-full" />
          <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-radial from-[#70a831]/20 via-[#70a831]/10 to-transparent rounded-full" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-white/80 rounded-full p-1 backdrop-blur-sm transition-colors duration-200 hover:bg-white/95 z-10"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="relative p-8 sm:p-10">
          {/* Logo or icon could go here */}
          <div className="mb-6 flex justify-center">
            <div className="bg-[#92c353]/10 rounded-full p-4">
              <Image
                src="/images/logos/logo-2.png"
                alt="Dentech Icon"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              {content}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={ctaLink}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-[#92c353] hover:bg-[#70a831] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-[#92c353]/20"
              >
                {ctaText}
              </a>
              <button
                onClick={onClose}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-xl text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-200"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Hook to manage popup visibility and persistence
export const usePopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem('popupLastShown');
    const hasClosedPopup = localStorage.getItem('popupClosed');
    const now = new Date().getTime();

    // Show popup if:
    // 1. First time visitor (no record of closing or showing) OR
    // 2. Returning visitor who:
    //    - Hasn't seen it in the last 24 hours AND
    //    - Either never closed it OR closed it more than 7 days ago
    if ((!lastShown && !hasClosedPopup) || 
        ((!lastShown || now - parseInt(lastShown) > 24 * 60 * 60 * 1000) && // 24 hours
         (!hasClosedPopup || now - parseInt(hasClosedPopup) > 7 * 24 * 60 * 60 * 1000))) { // 7 days
      
      // Wait 30 seconds before showing
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem('popupLastShown', now.toString());
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopUp = () => {
    setIsVisible(false);
    localStorage.setItem('popupClosed', new Date().getTime().toString());
  };

  return { isVisible, closePopUp };
};

export default PopUp; 