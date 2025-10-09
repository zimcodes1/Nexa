// MainBox.jsx
import { fetchMarketData, API_ID } from "../api";
import { useEffect, useState } from "react";
import CoinDetails from "./CoinDetails";

function Coin({ coinData, chart }) {
  const [showDetails, setShowDetails] = useState(false);

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
    <>
      <div onClick={() => setShowDetails(true)} className="flex w-[90%] h-20 ml-[5%] max-sm:h-15 max-sm:w-[95%] max-sm:mx-auto max-sm:rounded-3xl rounded-4xl bg-[#cccccc0c] max-sm:bg-transparent mt-1 px-5 max-sm:px-2 items-center cursor-pointer">
        <div className="w-[100%] h-full flex items-center justify-between">
          <span className="flex items-center">
            <span className="overflow-hidden w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] flex justify-center items-center">
              <img
                src={coinData.image}
                alt={displayName}
                className="w-full h-auto"
              />
            </span>
            <span className="flex flex-col ml-2">
              <h3 className="text-gray-100 font-semibold">{displayName}</h3>
              <p className="text-gray-400 max-sm:text-sm">
                {coinData.abb}: {price}
              </p>
            </span>
          </span>

          <span className="text-right">
            <h3 className="font-semibold text-gray-100 max-sm:hidden">{changeUSD}</h3>
            <p className={`${pctClass}  max-sm:text-sm`}>
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
      {showDetails && (
        <CoinDetails
          coin={coinData}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
}

function MainBox({ onAction }) {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBalance, setShowBalance] = useState(true); // Add this line

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
    <div className="flex flex-col max-md:w-[85%] max-[820px]:w-[80%] max-[820px]:h-[100dvh] w-[50%] h-[740px] max-md:h-[100dvh] pb-10 max-md:pb-0 max-[820px]:ml-[12.5%] max-sm:ml-0 overflow-hidden backdrop-blur-sm max-sm:w-full max-sm:overflow-wrap">
      <div className="flex w-full max-sm:w-[95%] max-sm:mx-auto h-[30%] max-[820px]:h-[250px] max-md:py-5 max-sm:h-[250px] max-sm:sticky max-sm:top-0 max-sm:bg-[rgba(204,204,204,0.03)] max-sm:border max-sm:border-[#cccccc11] max-sm:p-4 max-sm:pt-6 bg-[#cccccc11] rounded-4xl mt-[2%] overflow-hidden max-sm:rounded-3xl">
        <div className="flex flex-col justify-between w-[30%] h-full p-5 max-md:px-5 max-md:my-0 max-sm:hidden max-md:p-0">
          <h3 className="text-gray-50 text-md max-sm:text-sm max-[1000px]:text-sm max-[1000px]:font-bold">Portfolio Summary</h3>
          <span>
            <p className="text-green-200 text-sm mt-0 ">Available balance</p>
            <h1 className="text-5xl my-2 text-gray-50 max-md:text-3xl max-[1000px]:text-2xl">
            $0<dot className="text-gray-500">.00</dot>
            </h1>
            <p className="mt-1 text-[red] text-sm">
            <i className="fa fa-angle-down"></i>2.5% (1d) -$130
          </p>
          </span>
        
        </div>

        <div className="w-[70%] max-sm:w-full h-full p-5 max-[820px]:pb-0 max-sm:p-0 overflow-hidden flex justify-between flex-col" id="chart">
          <div className="w-full h-fit max-sm:flex max-sm:justify-between max-sm:items-start">
            <span className="max-sm:flex items-center hidden">
              <h1 className="text-4xl max-sm:my-0 text-gray-50 hidden max-sm:block font-bold">
                {showBalance ? (
                  <>$463<dot>.0</dot></>
                ) : (
                  '$****'
                )}
              </h1>
              <i 
                className={`fa ${showBalance ? 'fa-eye-slash' : 'fa-eye'} text-sm p-2 text-gray-50 cursor-pointer`}
                onClick={() => setShowBalance(!showBalance)}
              ></i>
            </span>
  
            <button className="bg-[#cccccc31] max-sm:text-gray-300 max-sm:bg-[#cccccc11] text-gray-50 px-3 py-2 rounded-xl cursor-pointer float-end text-sm">Buy Crypto <i className="fa fa-credit-card"></i></button>
          </div>
          <div className="w-full h-fit flex justify-end items-end max-sm:justify-between overflow-scroll scrollbar-hide">
            <span className="flex flex-col">
              <span className='actionButton max-sm:text-gray-300' onClick={() => onAction('send')}>
              <i className="fas fa-arrow-left rotate-135"></i>
              </span>
              <p className="text-gray-100 max-sm:text-gray-300 text-sm  text-center mt-1">Send</p>
            </span>
          
          <span className="flex flex-col"> 
              <span className='actionButton max-sm:text-gray-300' onClick={() => onAction('recieve')}>
              <i className="fas fa-arrow-left rotate-320"></i>
              </span>  
              <p className="text-gray-100 max-sm:text-gray-300 text-sm text-center mt-1">Receive</p>
          </span>
         
          <span className="flex flex-col">
              <span className='actionButton max-sm:text-gray-300' onClick={() => onAction('nft')}>
              <i className="fas fa-image"></i>
            </span>  
              <p className="text-gray-100 max-sm:text-gray-300 text-sm text-center mt-1">NFT</p>
          </span>
            
          <span  className="flex flex-col">
              <span className='actionButton max-sm:text-gray-300' onClick={() => onAction('swap')}>
              <i className="fas fa-exchange-alt"></i>
            </span>
              <p className="text-gray-100 max-sm:text-gray-300 text-sm text-center mt-1">Swap</p>
          </span>

           <span  className="flex flex-col max-sm:hidden">
              <span className='actionButton'>
              <i className="fas fa-qrcode"></i>
            </span>  
              <p className="text-gray-100 text-sm text-center mt-1">Scan</p>
          </span>
            
          <span  className="flex flex-col">
              <span className='actionButton max-sm:text-gray-300'>
              <i className="fas fa-history"></i>
            </span>
              <p className="text-gray-100 max-sm:text-gray-300 text-sm text-center mt-">History</p>
          </span>

           
          </div> 
        </div>
      </div>

      <div className="w-full h-[75%] max-[820px]:h-[85%] max-md:h-[75%] bg-[#cccccc11] rounded-4xl mt-[2%] max-sm:mt-5 overflow-scroll scrollbar-hide max-sm:bg-transparent max-sm:overflow-wrap max-sm:h-full">
        <span className="flex items-center justify-between mr-[5%]">
          <h3 className="font-large font-bold ml-[5%] my-5 text-gray-50">
            Top Assets
          </h3>
          <p className="text-center bg-[#cccccc17] max-sm:hidden rounded-4xl text-xs text-gray-300 cursor-pointer px-4 py-1.5">
            View all
          </p>
          <span className="hidden max-sm:flex justify-between items-center">
                <i className="fa fa-plus-circle text-gray-50 text-lg p-1 mx-2 cursor-pointer"></i>
                <i className="fa fa-search text-gray-50 text-lg p-1 cursor-pointer"></i>
          </span>
        </span>

        <div className="flex flex-col gap-2 pb-6 pt-2">
          {loading && (
            <p className="text-gray-400 ml-[5%]">Loading coins...</p>
          )}
          {error && (
            <>
              <img src="/images/neterror.png" alt="Error" className="w-[60%] mx-auto"/>
              <p className="text-red-400 text-center">{error}, check your connection.</p>
            </>
          )}
          {!loading &&
            !error &&
            coins.map((coin) => <Coin key={coin.coinId} coinData={coin}/>)}
        </div>
      </div>



    <div className="hidden max-sm:flex fixed h-[60px] w-full bottom-0 bg-[#111] justify-between max-sm:px-5 items-center border-t border-[#cccccc11]">
        <span className="flex flex-col text-gray-400 items-center hover:text-gray-300">
          <i className="fa fa-home"></i>
          <p className="text-sm">Home</p>
        </span>
        <span className="flex flex-col text-gray-400 items-center hover:text-gray-300">
          <i className="fa fa-dollar"></i>
          <p className="text-sm">Markets</p>
        </span>
         <span className="flex flex-col text-gray-400 items-center hover:text-gray-300">
          <i className="fa fa-line-chart"></i>
          <p className="text-sm">Trade</p>
        </span>
        <span className="flex flex-col text-gray-400 items-center hover:text-gray-300">
          <i className="fa fa-compass"></i>
          <p className="text-sm">Discover</p>
        </span>
        <span className="flex flex-col text-gray-400 items-center hover:text-gray-300">
          <i className="fa fa-wallet"></i>
          <p className="text-sm">Wallet</p>
        </span>
       
    </div>
      
    </div>

  );
}

export default MainBox;
