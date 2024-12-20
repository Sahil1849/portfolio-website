"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer",
    company: "Vionsys IT Solutions India Pvt. Ltd",
    period: "July 2024 - Present",
    description: "Developed and maintained full-stack applications.",
  },
  {
    title: "Junior Developer",
    company: "Vionsys IT Solutions India Pvt. Ltd",
    period: "April 2024 - July 2024",
    description: "Worked on front-end development using React and TypeScript.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl py-4 font-bold text-center mb-8 dark:text-white">
          Experience
        </h2>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6"
            >
              {/* Purple Accent Line */}
              <div className="absolute left-0 top-0 h-full w-2 bg-purple rounded-l-lg"></div>

              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {exp.title}
              </h3>
              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {exp.company}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {exp.period}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
