// api.js
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

// Fetch multiple coins in one request
export async function fetchMarketData(ids) {
  const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids.join(",")}${
    API_KEY ? `&x_cg_demo_api_key=${API_KEY}` : ""
  }`;

  try {
    const res = await axios.get(API_URL);
    return res.data.map((coin) => ({
      coinId: coin.id,
      currentPrice: coin.current_price,
      priceChangeUSD: coin.price_change_24h,
      priceChangePercent: coin.price_change_percentage_24h,
      image: coin.image,
      name: coin.id,
      abb: coin.symbol.toUpperCase(),
    }));
  } catch (error) {
    console.error("Error fetching market data:", error);
    throw error;
  }
}

// static coin info (fallback images if needed)
export const API_ID = [
  { name: "bitcoin", abb: "BTC" },
  { name: "solana", abb: "SOL" },
  { name: "tron", abb: "TRX" },
  { name: "ethereum", abb: "ETH" },
  { name: "ton", abb: "TON" },
  { name: "polkadot", abb: "POK" },
  { name: "sui", abb: "SUI" },
  { name: "toncoin", abb: "TON" },
  { name: "aave", abb: "AAVE" },
  { name: "pepe", abb: "PEPE" },
  { name: "jupiter", abb: "JUP" },
  { name: "ripple", abb: "XRP" },
  { name: "litecoin", abb: "LTC" },
  { name: "cardano", abb: "ADA" },
  { name: "dogecoin", abb: "DOGE" },
  { name: "shiba-inu", abb: "SHIB" },
  { name: "matic-network", abb: "MATIC" },
  { name: "avalanche-2", abb: "AVAX" },
  { name: "chainlink", abb: "LINK" },
  { name: "uniswap", abb: "UNI" },
  { name: "cosmos", abb: "ATOM" },
  { name: "algorand", abb: "ALGO" },
  { name: "filecoin", abb: "FIL" },
  { name: "stellar", abb: "XLM" },
  { name: "vechain", abb: "VET" },
  { name: "internet-computer", abb: "ICP" }
];
