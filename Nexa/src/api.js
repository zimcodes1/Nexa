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
  { name: "bitcoin", image: "/images/bitcoin.png", abb: "BTC" },
  { name: "solana", image: "/images/solana.png", abb: "SOL" },
  { name: "tron", image: "/images/tron.png", abb: "TRX" },
  { name: "ethereum", image: "/images/ethereum.png", abb: "ETH" },
  { name: "ton", image: "/images/ton.png", abb: "TON" },
  { name: "polkadot", image: "/images/polkadot.png", abb: "POK" },
  { name: "sui", image: "/images/sui.png", abb: "SUI" },
];
