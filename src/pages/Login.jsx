import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authService";
import { motion } from "framer-motion";
import { Lock, User } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    logout();
    // Redirect if needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4 py-12">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800 w-full max-w-md p-8 rounded-2xl shadow-2xl space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-3xl font-bold text-center">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-sm text-center">
          Please enter your credentials to access the dashboard.
        </p>

        {error && (
          <div className="bg-red-500/90 text-white text-sm rounded-lg px-4 py-2 text-center">
            {error}
          </div>
        )}
        <div className="relative mb-4">
          <User
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-aaa-accent-bg transition"
            placeholder="Username"
            required
          />
        </div>

        <div className="relative mb-6">
          <Lock
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-aaa-accent-bg transition"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-aaa-accent-bg hover:bg-aaa-accent-bg/80 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CryptoDash. All rights reserved.
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
