import TradingViewWidget from "./TradingViewWidget"


function CoinDetails({ coin, onClose }) {
    return(
        <div className="flex fixed inset-0 bg-[#0f0f0f] bg-opacity-50 flex-wrap items-start justify-center pt-5 rounded-3xl">
            <div className="flex items-center justify-between w-full px-5">
                <span className="flex items-center cursor-pointer border p-1 rounded-md border-[#cccccc11] transition duration-200 hover:border-[#cccccc33]">
                    <img src={coin.image} alt={coin.name} className="w-[40px] h-[40px] rounded-full mr-2"/>
                    <h1 className="text-lg font-bold text-gray-50">{coin.name.toUpperCase()} <i className="fa fa-angle-down"></i></h1>
                </span>
                <span>
                    <i className="fa fa-star text-gray-500 cursor-pointer p-2 text-2xl mx-1 hover:text-amber-500"></i>
                    <i className="fa fa-bell text-gray-500 cursor-pointer p-2 text-2xl mx-1 hover:text-amber-500"></i>
                    <i className="fa fa-close text-gray-50 cursor-pointer p-2 text-2xl mx-1" 
                       onClick={onClose}></i>
                </span>
            </div>
            <div className="flex items-start justify-between w-[90%] mt-2">
                <span>
                    <h1 className="text-gray-200 text-4xl font-mono">${coin.currentPrice}</h1>
                    <span className={`text-lg font-mono ${coin.priceChangePercent >= 0 ? 'text-green-200' : 'text-red-400'}`}>
        <i className={`fa fa-angle-${coin.priceChangePercent >= 0 ? 'up' : 'down'}`}></i>
        <b>{coin.priceChangePercent}%</b>{' '}
        <b>{coin.priceChangePercent >= 0 ? '+' : ''}{coin.priceChangeUSD}</b>
    </span>
                    </span>
                <span className="flex flex-col">
                    <button className="bg-green-400 text-gray-950 font-bold py-2 px-5 rounded-md hover:bg-gray-50 cursor-pointer transition duration-200">Trade <i className="fa fa-dollar"></i></button>
                    <u className="text-gray-200 mt-1 cursor-pointer">Available Assets</u>
                </span>
               
            </div>
            <div className="flex items-start w-[90%] h-[50%] mt-1 p-5">
                <TradingViewWidget></TradingViewWidget>
            </div>
            <div className="flex flex-wrap w-full mx-10 h-[20%]">
                <ul className="text-gray-200 w-full"><h3 className="text-lg font-bold">Token Info</h3>
                    <li className="mt-5">Token Name: <b className="float-end">{coin.name} ({coin.abb})</b></li>
                    <li className="mt-1 flex justify-between">Contract Address: <b className="float-end">0x7c5d7B4b90892ce698ae17cDCED3a60aa505aF8F <i className="fa fa-copy text-gray-400"></i></b></li>
                    <li className="mt-1 flex justify-between">Chain: <span><img src="/images/ton.png" alt="Ton" className="w-[20px] h-[20px] rounded-full inline"/><b className="float-end">Ton</b></span></li>
                </ul>
            </div>
        </div>
    )
}

export default CoinDetails