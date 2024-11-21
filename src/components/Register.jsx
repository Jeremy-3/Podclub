import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default to 'user'
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // To handle redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    // Prepare the payload to send to the backend
    const payload = { username, email, password, role };

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.msg);
        setError(""); // Clear previous errors

        // Redirect user based on role
        if (role === "admin") {
          // Redirect to the Admin Dashboard if the role is admin
          navigate("/admindashboard");
        } else {
          // Redirect to the User Dashboard if the role is user
          navigate("/userdashboard");
        }
      } else {
        setError(data.msg || "An error occurred during registration.");
        setSuccessMessage(""); // Clear previous success message
      }
    } catch (error) {
      setError("Failed to connect to the server.");
      setSuccessMessage(""); // Clear previous success message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-center mb-4 text-white">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="block text-sm font-medium text-white">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mt-4">
            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-700 transition">
              Register
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-white">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
