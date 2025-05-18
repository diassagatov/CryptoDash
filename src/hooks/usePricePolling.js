import { useEffect } from "react";
import { startPollingPrice } from "../api/coinService";

export const usePricePolling = (trackedTokens, vsCurrency, setPriceHistory) => {
  useEffect(() => {
    const stopPolling = startPollingPrice(
      trackedTokens.join(","),
      vsCurrency,
      (data) => {
        const timestamp = new Date().toLocaleTimeString();
        setPriceHistory((prev) => [
          ...prev.slice(-19),
          {
            time: timestamp,
            ...Object.fromEntries(
              trackedTokens.map((t) => [t, data[t]?.[vsCurrency] ?? null])
            ),
          },
        ]);
      }
    );
    return () => stopPolling();
  }, [trackedTokens, vsCurrency]);
};
