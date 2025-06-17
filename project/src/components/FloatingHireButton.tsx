import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const FloatingHireButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldShow = scrollTop > 300;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  return (
      <AnimatePresence>
        {isVisible && (
            <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
              <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        className="absolute bottom-14 sm:bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-56 sm:w-64 border border-gray-200 dark:border-gray-600"
                    >
                      <button
                          onClick={() => setIsExpanded(false)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                          Let's work together!
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          I'm available for freelance projects and full-time opportunities.
                        </p>

                        <div className="space-y-2">
                          <motion.button
                              onClick={scrollToContact}
                              className="w-full flex items-center space-x-2 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                          >
                            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Send Message</span>
                          </motion.button>

                          <motion.a
                              href={`mailto:${portfolioData.personal.email}`}
                              className="w-full flex items-center space-x-2 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-xs sm:text-sm"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                          >
                            <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Quick Email</span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="bg-primary-600 hover:bg-primary-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Hire me"
              >
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                  {isExpanded ? (
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                  )}
                </motion.div>
              </motion.button>

              {/* Floating animation rings */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0 border-2 border-primary-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute inset-0 border-2 border-primary-400 rounded-full"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.5,
                    }}
                />
              </div>
            </div>
        )}
      </AnimatePresence>
  );
};