import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4 fixed w-full top-0 z-10 left-0">
      <div className="flex justify-between items-center w-full">
        {/* Logo or Brand Name */}
        <div className="text-white text-xl font-bold">
          PodClub
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-6">
          <span className="text-white hover:text-orange-500 transition duration-300 cursor-pointer">
            Home
          </span>
          <span className="text-white hover:text-orange-500 transition duration-300 cursor-pointer">
            About
          </span>
          <span className="text-white hover:text-orange-500 transition duration-300 cursor-pointer">
            Login
          </span>
          <span className="text-white hover:text-orange-500 transition duration-300 cursor-pointer">
            Register
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white p-4 space-y-4">
          <span className="block text-white hover:text-orange-500 cursor-pointer">
            Home
          </span>
          <span className="block text-white hover:text-orange-500 cursor-pointer">
            About
          </span>
          <span className="block text-white hover:text-orange-500 cursor-pointer">
            Login
          </span>
          <span className="block text-white hover:text-orange-500 cursor-pointer">
            Register
          </span>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
