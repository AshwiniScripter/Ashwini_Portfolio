// Footer.jsx
import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5">
      <div className="container mx-auto text-center">

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://www.linkedin.com/in/ashwini-salunke-8b0704320/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white text-2xl transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/AshwiniScripter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white text-2xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/ashwini_salunke29/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white text-2xl transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ashwini. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
