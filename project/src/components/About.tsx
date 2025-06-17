import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolio';

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { about, skills, experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const skillCategories = ['Frontend', 'Backend', 'Database', 'Design', 'API'];

  return (
      <section
          id="about"
          ref={ref}
          className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-12 sm:space-y-16"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
            </motion.div>

            {/* Introduction */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {about.intro}
                </p>
                <ul className="space-y-3">
                  {about.highlights.map((highlight, index) => (
                      <motion.li
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{highlight}</span>
                      </motion.li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {skillCategories.map((category, index) => (
                      <motion.div
                          key={category}
                          className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-4 sm:p-6 rounded-lg text-center border border-primary-100 dark:border-primary-800"
                          whileHover={{ scale: 1.05, rotate: 1 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-2">{category}</h4>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {skills.filter(skill => skill.category === category).length} skills
                        </div>
                      </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center">
                Technical Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm sm:text-base text-gray-900 dark:text-white">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                            className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center">
                Experience
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative pl-6 sm:pl-8 border-l-4 border-primary-200 dark:border-primary-800"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                    >
                      <div className="absolute -left-2 sm:-left-3 top-0 w-4 h-4 sm:w-6 sm:h-6 bg-primary-600 rounded-full border-2 sm:border-4 border-white dark:border-gray-900"></div>
                      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm sm:text-base">{exp.company}</p>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{exp.description}</p>
                      </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};