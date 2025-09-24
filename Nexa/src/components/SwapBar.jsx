
const SwapBar = ()=>{
    return(
        <div className="flex w-[30%] h-[700px] bg-gradient-to-b from-transparent to-[#cccccc11] rounded-4xl mr-5 p-5 flex-wrap backdrop-blur-sm">

            <h3 className="text-gray-50 text-lg font-bold">Swap</h3>

            <div className="w-full h-[40%] rounded-3xl bg-[#cccccc0a]">
                <span className="flex justify-between items-center px-5 mt-5">
                <p className="text-gray-400 text-lg">From:</p>
                <span className='bg-[#cccccc11] flex justify-center rounded-4xl text-sm shadow-md text-gray-50 cursor-pointer p-1 w-35'><img src="/images/tron.png" alt="Chain" className='rounded-full w-[20px] h-[20px] mr-1'/>0x2479...bfd9 <i className="fa fa-angle-down mt-1"></i></span>
                </span>

                <div className="w-[97%] h-[75%] bg-[#cccccc0a] rounded-3xl mx-auto mt-3 pt-1 flex-col justify-between">
                    <span className="flex justify-between items-center px-5 pt-3">
                        <p className="text-green-200 text-sm">Available: </p> <p className="text-gray-50 text-sm font-bold">5134 <b className="ml-1 text-center bg-[#cccccc11] rounded-4xl text-xs text-gray-200 cursor-pointer px-2 py-1.5">MAX</b></p>
                    </span>

                    <span className="flex justify-between items-center px-5 pt-3 mt-[15%]">
                        <span className="cursor-pointer flex justify-between items-center"><img src="/images/tron.png" alt="Coin" className="rounded-full w-[30px] h-[30px] mr-1"/> <p className="text-gray-50">Tron</p> <i className="fa fa-angle-down ml-1 text-gray-50"></i></span>
                        <input type="text" className="bg-transparent text-right text-xl font-semibold text-gray-100 focus:outline-none" placeholder="0.00"/>
                    </span>
                    <p className="text-green-200 text-sm mt-4 mr-4 float-end"> ~ $0.00</p>
                </div>
            </div>


            <div className="w-full h-[40%] rounded-3xl bg-[#cccccc0a]">
                <span className="flex justify-between items-center px-5 mt-5">
                <p className="text-gray-400 text-lg">To:</p>
                  <span className='bg-[#cccccc11] flex justify-center rounded-4xl text-sm shadow-md text-gray-50 cursor-pointer p-1 w-35'><img src="/images/sui.png" alt="Chain" className='rounded-full w-[20px] h-[20px] mr-1'/>0x1635...7d7a <i className="fa fa-angle-down mt-1"></i></span>
                </span>

                 <div className="w-[97%] h-[75%] bg-[#cccccc0a] rounded-3xl mx-auto mt-3">
                     <span className="flex justify-between items-center px-5 pt-3">
                        <p className="text-green-200 text-sm">You recieve:</p> <p className="text-gray-50 text-sm font-bold">0.00</p>
                    </span>

                    <span className="flex justify-between items-center px-5 pt-3 mt-[15%]">
                        <span className="flex justify-between items-center cursor-pointer"><img src="/images/usdt.png" alt="Coin" className="rounded-full w-[30px] h-[30px] mr-1"/> <p className="text-gray-50">USDT</p> <i className="fa fa-angle-down ml-1 text-gray-50"></i></span>
                        <input type="text" className="bg-transparent text-right text-xl font-semibold text-gray-100 focus:outline-none" placeholder="0.00"/>
                    </span>
                    <p className="text-green-200 text-sm mt-4 mr-4 float-end"> ~ $0.00</p>
                </div>
            </div>
            <button className="w-full h-[60px] bg-green-400 rounded-2xl text-left px-6 font-semibold text-gray-950 cursor-pointer">Confirm Swap <i className="fa fa-arrow-right float-end"></i></button>
        </div>
    )
}

export default SwapBar