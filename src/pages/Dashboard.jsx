import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getSupportedVsCurrencies } from "../api/coinService";
import { useAuthRedirect } from "../hooks/useAuthRedirect";
import { usePricePolling } from "../hooks/usePricePolling";
import TokenSelector from "../components/TokenSelector";
import CurrencySelector from "../components/CurrencySelector";
import TokenBadges from "../components/TokenBadges";
import ChartWrapper from "../components/ChartWrapper";
import TransactionTable from "../components/TransactionTable";
import DashboardHeader from "../components/DashboardHeader";

const Dashboard = () => {
  useAuthRedirect();

  const [trackedTokens, setTrackedTokens] = useState(["bitcoin", "ethereum"]);
  const [vsCurrency, setVsCurrency] = useState("usd");
  const [priceHistory, setPriceHistory] = useState([]);
  const [supportedCurrencies, setSupportedCurrencies] = useState([]);

  useEffect(() => {
    getSupportedVsCurrencies()
      .then(setSupportedCurrencies)
      .catch(console.error);
  }, []);
  const [latestPrices, setLatestPrices] = useState({});
  usePricePolling(trackedTokens, vsCurrency, setPriceHistory, setLatestPrices);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 pb-8 md:px-8 space-y-8">
      <DashboardHeader />

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div>
          <label className="text-sm font-semibold">Tracked Cryptos</label>
          <TokenSelector
            trackedTokens={trackedTokens}
            setTrackedTokens={setTrackedTokens}
          />
        </div>
        <CurrencySelector
          vsCurrency={vsCurrency}
          setVsCurrency={setVsCurrency}
          supportedCurrencies={supportedCurrencies}
        />
      </motion.div>

      <TokenBadges tokens={trackedTokens} onRemove={setTrackedTokens} />

      <ChartWrapper tokens={trackedTokens} data={priceHistory} />

      <TransactionTable />
    </div>
  );
};

export default Dashboard;
