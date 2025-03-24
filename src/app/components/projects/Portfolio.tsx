"use client"
import React from "react";
import ProjectCard from "./ProjectCards";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ai-SmartChat Application",
    description:
      "Ai-SmartChat lets users create chat groups, collaborate in real time, and interact with an AI assistant using @ai.",
    tech: ["React-Vite", "Express", "Tailwind CSS", "MongoDB"],
    images: ["/Project7.1.png", "/Project7.2.png", "/Project7.3.png", "/Project7.4.png"],
    github: "https://github.com/Sahil1849/aiSmartChat-frontend",
    live: "https://ai-smart-chat-frontend.vercel.app/",
  },
  {
    title: "The Wild Oasis (Admin-App)",
    description:
      "The Wild Oasis (Admin App) is a comprehensive admin solution crafted to simplify cabin stay management for hotel staff.",
    tech: ["React", "React Query", "Supabase", "Component CSS"],
    images: ["/Project1.png", "/Project1.2.png", "/Project1.3.png"],
    github: "https://github.com/Sahil1849/the-wild-oasis-adminApp",
    live: "https://the-wild-oasis-app-rust.vercel.app/",
  },
  {
    title: "The Wild Oasis (Customer-App)",
    description:
      "The Wild Oasis (Customer-App) website allows users to explore, book, and manage cabin hotel stays effortlessly.",
    tech: ["Next.js", "Javascript", "Supabase", "React Query", "Tailwind CSS"],
    images: [
      "/Project2.png",
      "/Project2.2.png",
      "/Project2.3.png",
      "/Project2.4.png",
    ],
    github: "https://github.com/Sahil1849/the-wild-oasis-userWebsite",
    live: "https://the-wild-oasis-website-pearl-delta.vercel.app",
  },
  {
    title: "Applicant Tracking System (ATS)",
    description:
      "The Applicant Tracking System (ATS) is a comprehensive solution designed to simplify the recruitment process.",
    tech: ["Next.js", "Typescript", "MongoDB", "Tailwind CSS"],
    images: ["/Project5.png", "/Project5.2.png", "/Project5.3.png"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather-app.com",
  },
  {
    title: "Online Pizza Store",
    description:
      "Online pizza store that allows users to browse, add pizzas to their cart, and place orders effortlessly.",
    tech: ["React", "Javascript"],
    images: ["/Project3.png", "/Project3.2.png"],
    github: "https://github.com/Sahil1849/classy-weather",
    live: "https://online-pizza-store.vercel.app/",
  },
  {
    title: "The Quiz App",
    description:
      "The app allows users to answer multiple-choice questions, tracks their score in real time, and offers an interactive interface.",
    tech: ["React", "Javascript"],
    images: ["/Project6.png", "/Project6.2.png", "/Project6.3.png"],
    github: "https://github.com/Sahil1849/quiz-app",
    live: "https://virtual-classroom.com",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
