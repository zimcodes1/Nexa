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
  { name: "bitcoin", abb: "BTC", chart: "/images/charts/chart9.png" },
  { name: "solana", abb: "SOL", chart: "/images/charts/chart2.png" },
  { name: "tron", abb: "TRX", chart: "/images/charts/chart3.png" },
  { name: "ethereum", abb: "ETH", chart: "/images/charts/chart4.png" },
  { name: "ton", abb: "TON", chart: "/images/charts/chart5.png" },
  { name: "polkadot", abb: "POK", chart: "/images/charts/chart6.png" },
  { name: "sui", abb: "SUI", chart: "/images/charts/chart7.png" },
  { name: "toncoin", abb: "TON", chart: "/images/charts/chart8.png" },
  { name: "aave", abb: "AAVE", chart: "/images/charts/chart9.png" },
  { name: "pepe", abb: "PEPE", chart: "/images/charts/chart2.png" },
  { name: "jupiter", abb: "JUP", chart: "/images/charts/chart1.png" },
  { name: "ripple", abb: "XRP", chart: "/images/charts/chart5.png" },
  { name: "litecoin", abb: "LTC", chart: "/images/charts/chart4.png" },
  { name: "cardano", abb: "ADA", chart: "/images/charts/chart6.png" },
  { name: "dogecoin", abb: "DOGE", chart: "/images/charts/chart8.png" },
  { name: "shiba-inu", abb: "SHIB", chart: "/images/charts/chart7.png" },
  { name: "matic-network", abb: "MATIC", chart: "/images/charts/chart3.png" },
  { name: "avalanche-2", abb: "AVAX", chart: "/images/charts/chart4.png" },
  { name: "chainlink", abb: "LINK", chart: "/images/charts/chart9.png" },
  { name: "uniswap", abb: "UNI", chart: "/images/charts/chart1.png" },
  { name: "cosmos", abb: "ATOM", chart: "/images/charts/chart2.png" },
  { name: "algorand", abb: "ALGO", chart: "/images/charts/chart8.png" },
  { name: "filecoin", abb: "FIL", chart: "/images/charts/chart1.png" },
  { name: "stellar", abb: "XLM", chart: "/images/charts/chart4.png" },
  { name: "vechain", abb: "VET", chart: "/images/charts/chart9.png" },
  { name: "internet-computer", abb: "ICP", chart: "/images/charts/chart1.png" }
];
