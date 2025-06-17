import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const { personal, social } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="space-y-4 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2">
                <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" />
                <span className="text-lg sm:text-xl font-bold">{personal.name}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 max-w-md">
                Front End Developer passionate about creating exceptional digital experiences and solving complex problems through code.
              </p>
              <div className="flex space-x-4">
                {Object.entries(social).slice(0, 3).map(([platform, url]) => (
                    <motion.a
                        key={platform}
                        href={url}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={platform}
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-current rounded"></div>
                    </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                    <li key={link.name}>
                      <motion.button
                          onClick={() => scrollToSection(link.href)}
                          className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.button>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <p className="break-all">{personal.email}</p>
                <p>{personal.phone}</p>
                <p>{personal.location}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              <span>© {currentYear} {personal.name}</span>

            </div>

            <motion.button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>
      </footer>
  );
};