"use client";
import React, { useState } from "react";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    images: string[];
    github: string;
    live: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ project, index }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  // Motion variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen
    visible: { opacity: 1, y: 0 }, // Slide up
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation based on index
      className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden group">
        <motion.img
          src={project.images[currentImage]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          whileHover={{ scale: 1.1 }} // Image zoom effect on hover
        />
        {/* Navigation Buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between px-4">
          <button
            onClick={prevImage}
            className="p-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="p-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
        {/* Dots for Image Navigation */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {project.images.map((_, idx) => (
            <motion.div
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                idx === currentImage ? "bg-white" : "bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }} // Slight scale-up on hover
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        className="p-6"
        whileHover={{ scale: 1.02 }} // Slight pop effect on hover
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <motion.span
              key={idx}
              className="px-3 py-1 bg-slate-200 dark:bg-purple text-purple dark:text-white rounded-full text-sm font-medium"
              whileHover={{ scale: 1.1 }} // Scale up the tech badge slightly on hover
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span>Code</span>
          </Link>
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <FiExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
