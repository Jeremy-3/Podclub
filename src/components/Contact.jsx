import React from "react";
import { FaFacebookF, FaBehance, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div 
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://wallpaperaccess.com/full/2391514.jpg')" }}
    >

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-black bg-opacity-70 p-8 rounded-lg">
        {/* Contact Information */}
        <div className="flex-1 text-white">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">Contact us</h1>
          <p className="text-orange-500 mb-6">Get in touch with us for any inquiries!</p>
          
          <h3 className="text-lg font-semibold text-orange-500 mb-4">We are Located in:</h3>
          <p className="mb-2">Ngong Road</p>
          <p className="mb-2">Nairobi</p>
          <p className="mb-4">Kenya</p>
          
          <p className="mb-4">Call us: +2547 123 456 789</p>
          <p className="mb-12">We are always available<br />24 Hours a Day</p> {/* Increased margin-bottom here */}
          
          {/* Fancy Social Icons with Animation */}
          <div className="flex space-x-8 mt-8 justify-center"> {/* Increased margin-top */}
            <a 
              href="#" 
              className="text-orange-500 text-3xl transform hover:scale-125 hover:rotate-12 transition duration-300 ease-in-out"
            >
              <FaFacebookF />
            </a>
            <a 
              href="#" 
              className="text-orange-500 text-3xl transform hover:scale-125 hover:rotate-12 transition duration-300 ease-in-out"
            >
              <FaBehance />
            </a>
            <a 
              href="#" 
              className="text-orange-500 text-3xl transform hover:scale-125 hover:rotate-12 transition duration-300 ease-in-out"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="#" 
              className="text-orange-500 text-3xl transform hover:scale-125 hover:rotate-12 transition duration-300 ease-in-out"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
