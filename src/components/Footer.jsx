import React from 'react';

function Footer() {
  return (
    <footer className="bg-black p-4 w-full absolute bottom-0 left-0">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* PodClub Branding */}
        <div className="text-white text-xl font-bold">
          PodClub
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6">
          <span className="text-white hover:text-orange-500 transition duration-300 cursor-pointer">
            Home
          </span>
          <span className="text-white hover:text-orange-500 transition duration-300 cursor-pointer">
            About
          </span>
        </div>

        {/* Social Media Links between About and Copyright */}
        <div className="flex space-x-4">
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
