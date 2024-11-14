import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    // Email validation
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!isValidEmail) {
      setErrorMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Password validation
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    const payload = {
      username,
      password,
      email,
      role,
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Registration failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <form className="bg-gray-800 p-6 rounded-2xl shadow-md w-80 text-white">
        <div className="space-y-2">
          <h2 className="text-lg font-bold mb-4 text-center">Register</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
        <div className="mb-4 space-y-">
          <label className="block text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-600 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            required
          />
        </div>

        <div className="space-y-1 relative">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer text-gray-40 mr-6"
          >
            {showPassword ? <FaEyeSlash className="text-black" /> : <FaEye className="text-black" />}
          </span>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-600 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-600 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className={`w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
