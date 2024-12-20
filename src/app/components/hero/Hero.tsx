"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SahilSBankar.pdf";
    link.download = "SahilSBankar.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen pt-12 flex items-center dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
          >
            <div className="relative">
              <Image
                src="/Hero.png"
                alt="Sahil Bankar"
                height={550}
                width={550}
                quality={100}
              />
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 "
          >
            <div className="space-y-6 max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
              >
                HEY, I'M <span className="text-purple">SAHIL BANKAR</span>
              </motion.h2>

              <div className="text-xl text-gray-800 dark:text-gray-200">
                <TypeAnimation
                  sequence={[
                    "I am a Software Engineer",
                    2000,
                    "I am a Web Developer",
                    2000,
                    "I am a Full Stack Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                Specialized in developing and overseeing websites and web
                applications that play a pivotal role in achieving business
                success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-6 py-3 bg-purple hover:bg-purple text-white font-semibold rounded-lg shadow-lg transition-colors duration-300"
                >
                  <FaDownload className="w-5 h-5 mr-2" />
                  Download CV
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
