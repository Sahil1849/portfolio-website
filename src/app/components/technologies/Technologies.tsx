"use client";

import { motion } from "framer-motion";
import { AiOutlineCode } from "react-icons/ai";
import { FaGlobe, FaDatabase } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const techStackData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    icon: <FaGlobe className="w-6 h-6" />,
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Java"],
    icon: <AiOutlineCode className="w-6 h-6" />,
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
    icon: <FaDatabase className="w-6 h-6" />,
  },
  {
    category: "Tools",
    skills: ["GitHub", "Jira", "Postman", "Firebase"],
    icon: <FiSettings className="w-6 h-6" />,
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-6"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technologies
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto space-y-10">
          {techStackData.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                {tech.icon}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {tech.category}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {tech.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: skillIndex * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="bg-purple text-white dark:bg-slate-800 rounded-xl p-4 shadow-md text-center transition-transform"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
