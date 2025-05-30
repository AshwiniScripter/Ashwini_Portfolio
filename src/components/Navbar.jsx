import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      gsap.from(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-gradient-to-r p-4 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center px-6">
        {/* Left side: Logo with some space */}
        <div className="w-1/6 hidden md:block">
          <h1 className="text-xl font-semibold text-white">ASHWINI SALUNKE</h1>
        </div>

        {/* Center tabs */}
        <div className="hidden md:flex w-4/6 justify-center space-x-8">
          <a href="#about" className="text-white hover:text-yellow-300 text-xl">
            About
          </a>
          <a href="#education" className="text-white hover:text-yellow-300 text-xl">
            Education
          </a>
          <a href="#interest" className="text-white hover:text-yellow-300 text-xl">
            Activities & Interest
          </a>
          <a href="#skills" className="text-white hover:text-yellow-300 text-xl">
            Skills
          </a>
          <a href="#contact" className="text-white hover:text-yellow-300 text-xl">
            Contact
          </a>
        </div>

        {/* Right side: Projects tab */}
        <div className="w-1/6 hidden md:flex justify-end">
          <a href="#projects" className="text-white hover:text-yellow-300 text-xl">
            Projects
          </a>
        </div>

        {/* Mobile menu button with name on left */}
        <div className="md:hidden flex items-center ml-auto space-x-24">
          <h1 className="text-xl font-semibold text-white">ASHWINI SALUNKE</h1>
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-gray-800 mt-4 py-4 rounded-lg shadow-lg"
        >
          <a
            href="#about"
            className="block px-4 py-2 text-white hover:bg-gray-700 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#education"
            className="block px-4 py-2 text-white hover:bg-gray-700 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#interest"
            className="block px-4 py-2 text-white hover:bg-gray-700 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Activities & Interest
          </a>
          <a
            href="#skills"
            className="block px-4 py-2 text-white hover:bg-gray-700 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-white hover:bg-gray-700 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          {/* <a
            href="#projects"
            className="block px-4 py-2 text-white hover:bg-gray-700 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
