import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-black p-4 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* PodClub Branding */}
        <div className="text-white text-xl font-bold mb-4 md:mb-0">
          PodClub
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <span
            onClick={() => handleNavigate('/')}
            className="text-white hover:text-orange-500 transition duration-300 cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => handleNavigate('/about')}
            className="text-white hover:text-orange-500 transition duration-300 cursor-pointer"
          >
            About
          </span>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-white hover:text-orange-500 transition duration-300 cursor-pointer text-xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-white hover:text-orange-500 transition duration-300 cursor-pointer text-xl"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-white hover:text-orange-500 transition duration-300 cursor-pointer text-xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-white text-sm">
          <span>© {new Date().getFullYear()} PodClub. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
