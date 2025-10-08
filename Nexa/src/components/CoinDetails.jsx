import TradingViewWidget from "./TradingViewWidget"


function CoinDetails({ coin, onClose }) {
    return(
        <div className="flex fixed inset-0 bg-[#0f0f0f] max-sm:bg-[#111] bg-opacity-50 flex-wrap items-start justify-center pt-5 max-sm:pt-4 rounded-3xl max-[820px]:rounded-none max-sm:rounded-3xl shadow-lg max-sm:mt-5 max-sm:shadow-white max-sm:h-[100dvh]">
            <div className="flex items-center justify-between w-full px-5 max-sm:px-2">
                <span className="flex items-center cursor-pointer border p-1 rounded-2xl border-[#cccccc11] transition duration-200 hover:border-[#cccccc33]">
                    <img src={coin.image} alt={coin.name} className="w-[40px] h-[40px] max-sm:w-[35px] max-sm:h-[35px] rounded-full mr-2"/>
                    <h1 className="text-lg text-gray-50">{coin.name.toUpperCase()} <i className="fa fa-angle-down"></i></h1>
                </span>
                <span>
                    <i className="fa fa-star text-gray-500 cursor-pointer p-2 text-2xl max-sm:text-lg mx-1 hover:text-amber-500"></i>
                    <i className="fa fa-bell text-gray-500 cursor-pointer p-2 text-2xl max-sm:text-lg mx-1 hover:text-amber-500"></i>
                    <i className="fa fa-close text-gray-100 cursor-pointer p-2 text-2xl max-sm:text-lg mx-1" 
                       onClick={onClose}></i>
                </span>
            </div>
            <div className="flex items-start justify-between w-[90%] max-sm:w-[95%] mt-2 max-sm:mt-0 max-sm:flex-row max-sm:flex-wrap">
                <span className="max-sm:flex max-sm:items-center max-sm:justify-between max-sm:mt-2">
                    <h1 className="text-gray-200 text-4xl max-sm:text-2xl font-mono">${coin.currentPrice}</h1>
                    <span className={`text-lg max-sm:text-sm font-mono ${coin.priceChangePercent >= 0 ? 'text-green-200' : 'text-red-400'}`}>
        <i className={`fa max-sm:text-sm fa-angle-${coin.priceChangePercent >= 0 ? 'up' : 'down'}`}></i>
        <b>{coin.priceChangePercent}%</b>{' '}
        <b>{coin.priceChangePercent >= 0 ? '+' : ''}{coin.priceChangeUSD}</b>
                    </span>
                    </span>
                <span className="flex flex-col max-sm:flex-row max-sm:items-center">
                    <button className="bg-green-400 text-gray-950 font-bold py-2 px-5 max-sm:text-sm max-sm:px-4 max-sm:py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer transition duration-200 max-sm:my-2">Trade <i className="fa fa-dollar"></i></button>
                    <u className="text-gray-200 mt-1 cursor-pointer max-sm:hidden">Available Assets</u>
                </span>
               
            </div>
            <div className="flex items-start w-[90%] max-sm:w-full h-[50%] max-sm:h-[250px] mt-1 p-5 max-sm:p-0">
                <TradingViewWidget></TradingViewWidget>
            </div>
            <div className="flex flex-wrap w-full mx-10 max-sm:my-0 h-[20%] max-sm:h-[55%] max-sm:mx-5 max-sm:pt-4">
                <ul className="text-gray-200 w-full"><h3 className="text-lg font-bold">Token Info</h3>
                    <li className="mt-5 max-sm:mt-2 max-sm:text-sm">Token Name: <b className="float-end">{coin.name} ({coin.abb})</b></li>
                    <li className="flex-wrap mt-1 max-sm:mt-2 max-sm:text-sm flex justify-between">Contract Address: <b className="float-end">0x7c5d7B4b90892ce698ae17cDCED3a60aa505aF8F <i className="fa fa-copy text-gray-400"></i></b></li>
                    <li className="mt-1 flex justify-between max-sm:mt-2 max-sm:text-sm">Chain: <span><img src="/images/ton.png" alt="Ton" className="w-[20px] h-[20px] mr-1 rounded-full inline"/><b className="float-end">Ton</b></span></li>
                </ul>
            </div>
        </div>
    )
}

export default CoinDetails