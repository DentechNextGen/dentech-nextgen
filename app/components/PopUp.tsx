import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PopUpProps {
  title: string;
  content: string;
  ctaText: string;
  ctaLink: string;
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({
  title,
  content,
  ctaText,
  ctaLink,
  onClose,
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-8"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Popup Content */}
      <motion.div
        className="relative w-full max-w-7xl mx-auto z-50"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        {/* Main container with rounded corners and gradient background */}
        <div className="relative overflow-hidden bg-[#f3f7f0] rounded-[32px] min-h-[300px]">
          {/* Simple radial circles background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Largest, lightest circle */}
            <div className="absolute -top-[40%] -right-[40%] w-[140%] aspect-square rounded-full bg-gradient-radial from-[#e8f2e2] via-[#e8f2e2]/30 to-transparent" />
            {/* Large circle */}
            <div className="absolute -top-[30%] -right-[30%] w-[120%] aspect-square rounded-full bg-gradient-radial from-[#c5e0b4] via-[#c5e0b4]/40 to-transparent" />
            {/* Medium circle */}
            <div className="absolute -top-[20%] -right-[20%] w-[100%] aspect-square rounded-full bg-gradient-radial from-[#92c353] via-[#92c353]/30 to-transparent" />
            {/* Small circle */}
            <div className="absolute -top-[10%] -right-[10%] w-[80%] aspect-square rounded-full bg-gradient-radial from-[#70a831] via-[#70a831]/20 to-transparent" />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 bg-white/80 rounded-full p-2 backdrop-blur-sm transition-colors duration-200 hover:bg-white/95 z-10"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="relative px-6 sm:px-8 py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <div className="max-w-xl">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {title}
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  {content}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={ctaLink}
                    className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-[#92c353] hover:bg-[#70a831] transition-colors duration-200"
                  >
                    {ctaText}
                  </a>
                  <button
                    onClick={onClose}
                    className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-xl text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-200"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative mt-16 h-80 lg:mt-8">
                <Image
                  src="/images/background-hero.webp"
                  alt="Dentech Platform Interface"
                  width={1824}
                  height={1080}
                  className="absolute left-0 top-0 w-[57rem] max-w-none rounded-xl bg-white/5 ring-1 ring-white/10"
                  priority
                />
              </div>
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
    const lastShown = localStorage.getItem("popupLastShown");
    const hasClosedPopup = localStorage.getItem("popupClosed");
    const now = new Date().getTime();

    // Show popup if:
    // 1. First time visitor (no record of closing or showing) OR
    // 2. Returning visitor who:
    //    - Hasn't seen it in the last 24 hours AND
    //    - Either never closed it OR closed it more than 7 days ago
    if (
      (!lastShown && !hasClosedPopup) ||
      ((!lastShown || now - parseInt(lastShown) > 24 * 60 * 60 * 1000) && // 24 hours
        (!hasClosedPopup ||
          now - parseInt(hasClosedPopup) > 7 * 24 * 60 * 60 * 1000))
    ) {
      // 7 days

      // Wait 30 seconds before showing
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem("popupLastShown", now.toString());
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopUp = () => {
    setIsVisible(false);
    localStorage.setItem("popupClosed", new Date().getTime().toString());
  };

  return { isVisible, closePopUp };
};

export default PopUp;
