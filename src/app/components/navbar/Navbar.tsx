"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { BsMoonStars } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion for animations

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-screen fixed bg-white shadow-sm dark:bg-slate-900 text-slate-900 dark:text-slate-100  mx-auto px-10 py-2 flex justify-between items-center z-30">
      <div className="relative inline-block">
      <div className="rounded-full overflow-hidden border-2 border-purple">
        <Image
          src="/profile.png"
          alt="NA"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
    </div>
      <div className="hidden md:flex text-sm font-semibold items-center space-x-6">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple transition-colors"
          activeClass="active"
          spy={true}
        >
          HOME
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple transition-colors"
          activeClass="active"
          spy={true}
        >
          ABOUT
        </ScrollLink>
        <ScrollLink
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple transition-colors"
          activeClass="active"
          spy={true}
        >
          EXPERIENCE
        </ScrollLink>
        <ScrollLink
          to="techstack"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple transition-colors"
          activeClass="active"
          spy={true}
        >
          TECHNOLOGIES
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple transition-colors"
          activeClass="active"
          spy={true}
        >
          PROJECTS
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple transition-colors"
          activeClass="active"
          spy={true}
        >
          CONTACT
        </ScrollLink>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <LuSunMoon size={20} />
          ) : (
            <BsMoonStars size={20} />
          )}
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>
      {/* Mobile Menu with Full Width Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-lg rounded-md menu"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              <HiX
                onClick={() => setIsMenuOpen(false)} // Close button functionality
                className="absolute top-6 right-6 text-slate-900 dark:text-white cursor-pointer"
                size={30}
              />
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="block px-6 py-3 w-full text-center text-sm cursor-pointer hover:text-purple transition-colors"
                activeClass="active"
                spy={true}
              >
                HOME
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="block px-6 py-3 w-full text-center text-sm cursor-pointer hover:text-purple transition-colors"
                activeClass="active"
                spy={true}
              >
                ABOUT
              </ScrollLink>
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                className="block px-6 py-3 w-full text-center text-sm cursor-pointer hover:text-purple transition-colors"
                activeClass="active"
                spy={true}
              >
                EXPERIENCE
              </ScrollLink>
              <ScrollLink
                to="techstack"
                smooth={true}
                duration={500}
                className="block px-6 py-3 w-full text-center text-sm cursor-pointer hover:text-purple transition-colors"
                activeClass="active"
                spy={true}
              >
                TECH STACK
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="block px-6 py-3 w-full text-center text-sm cursor-pointer hover:text-purple transition-colors"
                activeClass="active"
                spy={true}
              >
                PROJECTS
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="block px-6 py-3 w-full text-center text-sm cursor-pointer hover:text-purple transition-colors"
                activeClass="active"
                spy={true}
              >
                CONTACT
              </ScrollLink>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors mt-4"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <LuSunMoon size={20} />
                ) : (
                  <BsMoonStars size={20} />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
