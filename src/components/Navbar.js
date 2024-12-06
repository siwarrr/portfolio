import React, { useContext, useEffect, useRef, useState } from "react";
import ThemeContext from "../utils/ThemeContext";
import { FaMoon, FaSun, FaBars, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-gray-800 text-white py-2 fixed top-0 left-0 w-full flex items-center justify-between px-4 z-50"
    >
      {/* Left Section */}
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-800 hover:bg-purple-400 rounded-md"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden sm:flex space-x-8 font-extralight text-xl">
        <li>
          <a href="#home" className="hover:text-purple-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-purple-300">
            About
          </a>
        </li>
        <li>
          <a href="#work" className="hover:text-purple-300">
            Work
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-purple-300">
            Experience
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-purple-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple-300">
            Contact
          </a>
        </li>
      </ul>

      {/* Right Section: Social Media + Hamburger */}
      <div className="flex items-center space-x-4">
        {/* Social Media Icons */}
        <div className="hidden lg:hidden sm:flex space-x-4">
          <a
            href="https://www.linkedin.com/in/siwar-benzayed-079741178/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white hover:text-purple-400 text-xl" />
          </a>
          <a
            href="https://github.com/siwarrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white hover:text-purple-400 text-xl" />
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 text-white hover:bg-gray-700 rounded-md"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="sm:hidden bg-gray-800 text-white p-4 absolute top-12 right-4 rounded-lg shadow-md"
        >
          <ul className="space-y-4">
            <li>
              <a href="#home" className="hover:text-purple-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-300">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-purple-300">
                Work
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-purple-300">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/siwar-benzayed-079741178/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white hover:text-purple-400 text-xl" />
            </a>
            <a
              href="https://github.com/siwarrr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white hover:text-purple-400 text-xl" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
