import { motion } from "framer-motion";

const MOCK_TRANSACTIONS = [
  { id: 1, type: "buy", pair: "BTC/USD", amount: 0.01, date: "2025-05-01" },
  { id: 2, type: "sell", pair: "ETH/USD", amount: 0.5, date: "2025-05-05" },
  { id: 3, type: "buy", pair: "SOL/USD", amount: 10, date: "2025-05-10" },
];

const TransactionTable = () => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4">📑 Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="py-2">Date</th>
              <th>Type</th>
              <th>Token Pair</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_TRANSACTIONS.map((tx) => (
              <tr key={tx.id} className="border-b border-gray-700">
                <td className="py-2">{tx.date}</td>
                <td
                  className={`capitalize font-semibold ${
                    tx.type === "buy" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {tx.type}
                </td>
                <td>{tx.pair}</td>
                <td>{tx.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TransactionTable;
