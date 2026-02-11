import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-100 border-t border-[#915EFF]/20 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-bold">Vaishali Paraskar</h3>
            <p className="text-secondary text-sm mt-1">
              Full Stack Software Engineer
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#about"
              className="text-secondary hover:text-white transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#work"
              className="text-secondary hover:text-white transition-colors text-sm"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-secondary hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
            <a
              href="/Vaishali_Paraskar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors text-sm"
            >
              Resume
            </a>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/vaishali-paraskar-23b2691a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary p-3 rounded-full hover:bg-[#0077b5] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-white text-lg" />
            </a>
            <a
              href="https://github.com/paraskar22"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary p-3 rounded-full hover:bg-gray-700 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-white text-lg" />
            </a>
            <a
              href="mailto:paraskar06.vaishali@gmail.com"
              className="bg-tertiary p-3 rounded-full hover:bg-red-600 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/20 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-secondary text-sm">
          <p className="flex items-center gap-1">
            © {currentYear} Vaishali Paraskar. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
