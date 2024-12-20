"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="dark:bg-slate-900 overflow-x-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 md:pl-12"
        >
          <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              I am a Software Engineer with a passion for building innovative,
              full-stack applications that solve real-world challenges. My
              expertise lies in creating seamless user experiences and scalable
              backend solutions, ensuring every project I undertake delivers
              measurable value. With a problem-solving mindset and a strong
              foundation in modern development practices, I enjoy taking complex
              ideas and turning them into functional, efficient, and visually
              captivating products.
            </p>
            <p>
              Beyond coding, I am a lifelong learner who thrives on exploring
              new technologies and staying ahead of industry trends. I actively
              contribute to open-source projects and engage with the tech
              community to exchange ideas and collaborate on innovative
              solutions. Mentorship and knowledge sharing are also integral to
              my journey, as I believe in empowering others to grow while
              constantly challenging myself to refine my skills and broaden my
              horizons.
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/about.png"
            height={400}
            width={400}
            alt="Professional Profile"
            className="object-cover w-full h-full"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
}
