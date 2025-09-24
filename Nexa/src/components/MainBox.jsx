// MainBox.jsx
import { fetchMarketData, API_ID } from "../api";
import { useEffect, useState } from "react";

function Coin({ coinData }) {
  const displayName =
    coinData.name?.[0].toUpperCase() + coinData.name?.slice(1);

  const price =
    coinData.currentPrice != null
      ? `$${Number(coinData.currentPrice).toLocaleString()}`
      : "—";

  const changeUSD =
    coinData.priceChangeUSD != null
      ? `${coinData.priceChangeUSD > 0 ? "+" : ""}$${Number(
          coinData.priceChangeUSD
        ).toFixed(2)}`
      : "—";

  const changePct =
    coinData.priceChangePercent != null
      ? `${coinData.priceChangePercent > 0 ? "+" : ""}${Number(
          coinData.priceChangePercent
        ).toFixed(2)}%`
      : "—";

  const pctClass =
    coinData.priceChangePercent == null
      ? "text-gray-400"
      : coinData.priceChangePercent >= 0
      ? "text-green-100"
      : "text-red-400";

  return (
    <div className="flex w-[90%] h-20 ml-[5%] rounded-4xl bg-[#cccccc0c] mt-1 px-4 items-center">
      <div className="w-[70%] h-full flex items-center justify-between">
        <span className="flex items-center">
          <span className="overflow-hidden w-[50px] h-[50px]">
            <img
              src={coinData.image}
              alt={displayName}
              className="w-full h-auto"
            />
          </span>
          <span className="flex flex-col ml-2">
            <h3 className="text-gray-100 font-semibold">{displayName}</h3>
            <p className="text-gray-400">
              {coinData.abb}: {price}
            </p>
          </span>
        </span>

        <span className="text-right">
          <h3 className="font-semibold text-gray-100">{changeUSD}</h3>
          <p className={pctClass}>
            <i
              className={`fa ${
                coinData.priceChangePercent >= 0
                  ? "fa-angle-up"
                  : "fa-angle-down"
              }`}
            ></i>{" "}
            {changePct}
          </p>
        </span>
      </div>
    </div>
  );
}

function MainBox() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ids = API_ID.map((c) => c.name);

    fetchMarketData(ids)
      .then((data) => setCoins(data))
      .catch((err) => {
        console.error(err);
        setError(err.message || "Failed to fetch coins");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col w-[50%] h-[700px] overflow-hidden backdrop-blur-sm">
      <div className=" flex w-full h-[30%] bg-[#cccccc11] rounded-4xl mt-[2%] overflow-hidden">
        <div className="w-[50%] h-full p-5">
          <h3 className="text-gray-50 text-md">Portfolio Summary</h3>
          <p className="text-green-200 text-sm mt-5">Available balance</p>
          <h1 className="text-5xl my-2 text-gray-50">
            $0<dot className="text-gray-500">.000</dot>
          </h1>
          <p className="mt-1 text-[red] text-sm">
            <i className="fa fa-angle-down"></i>2.5% (1d) -$130
          </p>
        </div>

        <div className="w-[50%] h-full p-5 overflow-hidden" id="chart">
          <img src="/images/chart.png" alt="Chart" className="w-full h-auto" />
        </div>
      </div>

      <div className="w-full h-[75%] bg-[#cccccc11] rounded-4xl mt-[2%] overflow-scroll scrollbar-hide">
        <span className="flex items-center justify-between mr-[5%]">
          <h3 className="font-large font-bold ml-[5%] my-5 text-gray-50">
            Top Assets
          </h3>
          <p className="text-center bg-[#cccccc17] rounded-4xl text-xs text-gray-300 cursor-pointer px-4 py-1.5">
            View all
          </p>
        </span>

        <div className="flex flex-col gap-2 pb-6 pt-2">
          {loading && (
            <p className="text-gray-400 ml-[5%]">Loading coins...</p>
          )}
          {error && (
            <p className="text-red-400 ml-[5%]">Error: {error}</p>
          )}
          {!loading &&
            !error &&
            coins.map((coin) => <Coin key={coin.coinId} coinData={coin} />)}
        </div>
      </div>
    </div>
  );
}

export default MainBox;
