import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center max-w-md w-full"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Ghost className="w-16 h-16 mx-auto text-indigo-400 mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold mb-2">404 - Not Found</h1>
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Back to Dashboard
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
