import { motion } from "framer-motion";
import { X } from "lucide-react";

const TokenBadges = ({ tokens, onRemove }) => {
  const handleRemove = (token) => {
    onRemove(tokens.filter((t) => t !== token));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tokens.map((token) => (
        <motion.div
          key={token}
          className="bg-gray-700 rounded-full px-3 py-1 flex items-center gap-2 text-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {token}
          <button
            onClick={() => handleRemove(token)}
            className="hover:text-red-400 transition"
          >
            <X size={16} />
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default TokenBadges;
