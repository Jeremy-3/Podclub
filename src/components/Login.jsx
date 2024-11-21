import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Added useNavigate import

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("https://podclub-backend-1.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login response data:", data); // Check the response data

      // Check if the user is banned
      if (data.isBanned) {
        setError("You have been banned.");
        return; // Stop further execution
      }

      // Assuming the response contains an access_token and user role
      const { access_token, user_id, role } = data;

      // Store the token and user_id in localStorage
      localStorage.setItem("access_token", access_token); // Store JWT
      localStorage.setItem("user_id", user_id); // Store user_id returned from backend

      // Check the role and redirect based on the role
      if (role === "admin") {
        navigate("/admindashboard"); // Redirect to Admin Dashboard
      } else {
        navigate("/userdashboard"); // Redirect to User Dashboard
      }
    } catch (error) {
      setError(error.message || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="max-w-md mx-auto p-6 border border-gray-300 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm text-gray-400">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            />
          </div>
          <div className="space-y-1 relative">
            <label htmlFor="password" className="text-sm text-gray-400">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? (
                <FaEyeSlash className="text-black" />
              ) : (
                <FaEye className="text-black" />
              )}
            </span>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-400 p-3 text-center text-gray-900 font-semibold hover:bg-orange-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <a href="/Register" className="text-orange-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
