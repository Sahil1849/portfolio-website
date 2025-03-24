"use client";
import { motion } from "framer-motion";
import { Code2, Globe, Database, Settings } from "lucide-react";
import { FaReact, FaNodeJs, FaJava, FaGithub, FaDocker, FaDatabase, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiMongodb, SiMysql, SiPrisma, SiJira, SiPostman, SiFirebase, SiRedis } from "react-icons/si";

const techStackData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="w-6 h-6 text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> }
    ],
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-500" /> },
      { name: "Express", icon: <SiExpress className="w-6 h-6 text-gray-500" /> },
      { name: "Java", icon: <FaJava className="w-6 h-6 text-red-600" /> },
      { name: "Python", icon: <FaPython className="w-6 h-6 text-yellow-400" /> }

    ],
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-pink-500 to-red-500"
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-blue-600" /> },
      { name: "Prisma", icon: <SiPrisma className="w-6 h-6 text-black dark:text-white" /> }
    ],
    icon: <Database className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-400"
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub", icon: <FaGithub className="w-6 h-6 text-gray-800 dark:text-white" /> },
      { name: "Jira", icon: <SiJira className="w-6 h-6 text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="w-6 h-6 text-orange-500" /> },
      { name: "Firebase", icon: <SiFirebase className="w-6 h-6 text-yellow-400" /> },
      { name: "Docker", icon: <FaDocker className="w-6 h-6 text-blue-500" /> },
      { name: "Redis", icon: <SiRedis className="w-6 h-6 text-red-500" /> }
    ],
    icon: <Settings className="w-6 h-6" />,
    gradient: "from-orange-500 to-yellow-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function TechStack() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text dark:text-white">
            Tech Stack
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {techStackData.map((tech) => (
            <motion.div key={tech.category} variants={itemVariants} className="relative group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />

                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${tech.gradient} text-white`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{tech.category}</h3>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {tech.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:shadow-md transition-all duration-200"
                    >
                      {skill.icon} {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
