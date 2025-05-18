const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-aYb5AQJ7QX4gidXurLkzdXyG";

const headers = {
  accept: "application/json",
  "x-cg-demo-api-key": API_KEY,
};

export async function getSimplePrice(ids, vsCurrencies = "usd") {
  try {
    const query = `?ids=${ids}&vs_currencies=${vsCurrencies}`;
    const res = await fetch(`${BASE_URL}/simple/price${query}`, { headers });

    if (!res.ok) throw new Error("Failed to fetch price");

    return await res.json();
  } catch (error) {
    console.error("Error in getSimplePrice:", error);
    throw error;
  }
}

export async function getTokenPriceById(
  platformId,
  contractAddresses,
  vsCurrencies = "usd"
) {
  try {
    const query = `?contract_addresses=${contractAddresses}&vs_currencies=${vsCurrencies}`;
    const res = await fetch(
      `${BASE_URL}/simple/token_price/${platformId}${query}`,
      { headers }
    );

    if (!res.ok) throw new Error("Failed to fetch token price by ID");

    return await res.json();
  } catch (error) {
    console.error("Error in getTokenPriceById:", error);
    throw error;
  }
}

export async function getSupportedVsCurrencies() {
  try {
    const res = await fetch(`${BASE_URL}/simple/supported_vs_currencies`, {
      headers,
    });

    if (!res.ok) throw new Error("Failed to fetch supported currencies");

    return await res.json();
  } catch (error) {
    console.error("Error in getSupportedVsCurrencies:", error);
    throw error;
  }
}

export function startPollingPrice(ids, vsCurrency, callback) {
  const intervalId = setInterval(async () => {
    try {
      const data = await getSimplePrice(ids, vsCurrency);
      callback(data);
    } catch (err) {
      console.error("Polling error:", err);
    }
  }, 5000);

  return () => clearInterval(intervalId);
}
