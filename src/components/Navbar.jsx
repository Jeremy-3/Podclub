import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in when the component mounts or when localStorage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("access_token");
      setIsLoggedIn(!!token); // Set isLoggedIn based on whether token exists
    };

    checkLoginStatus(); // Check on component mount

    // Listen for changes to localStorage (e.g., token removal on logout)
    window.addEventListener("storage", checkLoginStatus);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle log out
  const handleLogout = () => {
    localStorage.removeItem("access_token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update state immediately to reflect logout
    navigate("/"); // Redirect to home page (or login page if preferred)
  };

  return (
    <nav className="bg-black p-4 fixed w-full top-0 z-10 left-0">
      <div className="flex justify-between items-center w-full">
        {/* Logo or Brand Name */}
        <div className="text-orange-700 text-xl font-bold">PodClub</div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
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
          <NavLink
            to="/"
            exact
            className="text-white hover:text-orange-500 transition duration-300"
            activeClassName="text-orange-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-orange-500 transition duration-300"
            activeClassName="text-orange-500"
          >
            About
          </NavLink>

          {/* Conditional Rendering based on login status */}
          {isLoggedIn ? (
            <>
              <NavLink
                to="/admindashboard"
                className="text-white hover:text-orange-500 transition duration-300"
                activeClassName="text-orange-500"
              >
                Admin Dashboard
              </NavLink>
              <NavLink
                to="/userdashboard"
                className="text-white hover:text-orange-500 transition duration-300"
                activeClassName="text-orange-500"
              >
                User Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-white hover:text-orange-500 transition duration-300"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="text-white hover:text-orange-500 transition duration-300"
                activeClassName="text-orange-500"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="text-white hover:text-orange-500 transition duration-300"
                activeClassName="text-orange-500"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white p-4 space-y-4">
          <NavLink
            to="/"
            exact
            className="block text-white hover:text-orange-500"
            activeClassName="text-orange-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block text-white hover:text-orange-500"
            activeClassName="text-orange-500"
          >
            About
          </NavLink>

          {/* Conditional Rendering for Mobile Menu */}
          {isLoggedIn ? (
            <>
              <NavLink
                to="/admindashboard"
                className="block text-white hover:text-orange-500"
                activeClassName="text-orange-500"
              >
                Admin Dashboard
              </NavLink>
              <NavLink
                to="/userdashboard"
                className="block text-white hover:text-orange-500"
                activeClassName="text-orange-500"
              >
                User Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="block text-white hover:text-orange-500"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="block text-white hover:text-orange-500"
                activeClassName="text-orange-500"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="block text-white hover:text-orange-500"
                activeClassName="text-orange-500"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
