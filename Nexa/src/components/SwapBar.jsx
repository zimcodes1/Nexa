import React, { useState, useRef } from "react";
import useClickOutside from '../hooks/useClickOutside';

const SwapBar = ({ onClose })=>{
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);
    const componentRef = useRef();
    useClickOutside(componentRef, () => {
        if (window.innerWidth <= 640) {
            onClose();
        }
    });
    return(
        <div ref={componentRef} className="max-sm:overflow-scroll scrollbar-hide max-sm:px-5 max-sm:rounded-t-3xl max-sm:ml-0 mx-auto max-[820px]:bg-[#111] max-[820px]:fixed max-[820px]:w-[90%] max-[820px]:ml-[10%] max-[820px]:rounded-none max-[820px]:px-10 max-[820px]:pt-10 max-[820px]:h-full z-10 max-sm:w-full max-sm:h-[80%] max-sm:fixed max-sm:bottom-0 max-sm:rounded-b-none  max-sm:bg-[#141414] max-sm:shadow-md max-sm:sadow-no shadow-white flex w-[30%] h-[700px] bg-gradient-to-b from-transparent to-[#cccccc11] rounded-4xl mr-5 p-5 flex-wrap backdrop-blur-sm">
            
            <h3 className="text-gray-50 text-lg font-bold">Swap</h3>
            <div className="w-full h-[40%] rounded-3xl bg-[#cccccc0a] max-sm:bg-transparent">
                <span className="flex justify-between items-center px-5 mt-5">
                <p className="text-gray-400 text-lg">From:</p>
                <span onClick={() => setShowDropdown2(!showDropdown2)} className='bg-[#cccccc11] relative flex justify-center rounded-4xl text-sm shadow-md max-sm:shodow-none text-gray-50 cursor-pointer p-1 w-35'>
                    <img src="/images/tron.png" alt="Chain" className='rounded-full w-[20px] h-[20px] mr-1'/>
                    0x2479...bfd9 
                    <i className="fa fa-angle-down mt-1"></i>

                     {showDropdown2 && (
                        <div className="absolute top-full right-0 rounded-2xl overflow-hidden mt-1 shadow-md bg-[#222] z-10 min-w-[220px]">
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/solana.png" alt="Solana" className="w-[30px] h-[30px] rounded-full"/> Solana
                            </span>
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/ton.png" alt="Ton" className="w-[30px] h-[30px] rounded-full"/> Ton network
                            </span>
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/sui.png" alt="Sui" className="w-[30px] h-[30px] rounded-full"/> Sui network
                            </span>
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/ethereum.png" alt="Ethereum" className="w-[30px] h-[30px] rounded-full"/> Ethereum (ERC-20)
                            </span>
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/bitcoin.png" alt="Bitcoin" className="w-[30px] h-[30px] rounded-full"/> Bitcoin (BEP-20)
                            </span>
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/tron.png" alt="Tron" className="w-[30px] h-[30px] rounded-full"/> Tron (TRC-20)
                            </span>
                        </div>
                    )}
                </span>
                </span>

                <div className="w-[97%] h-[75%] bg-[#cccccc0a] rounded-3xl mx-auto mt-3 pt-1 flex-col justify-between">
                    <span className="flex justify-between items-center px-5 pt-3">
                        <p className="text-green-200 text-sm">Available: </p> <p className="text-gray-50 text-sm font-bold">5134 <b className="ml-1 text-center bg-[#cccccc11] rounded-4xl text-xs text-gray-200 cursor-pointer px-2 py-1.5">MAX</b></p>
                    </span>

                    <span className="flex justify-between items-center px-5 pt-3 mt-[15%] flex-wrap">
                        <span className="cursor-pointer flex justify-between items-center flex-wrap"><img src="/images/tron.png" alt="Coin" className="rounded-full w-[30px] h-[30px] mr-1"/> <p className="text-gray-50">Tron</p> <i className="fa fa-angle-down ml-1 text-gray-50"></i></span>
                        <input type="text" className="bg-transparent w-[60%] text-right text-xl font-semibold text-gray-100 focus:outline-none caret-green-400" placeholder="0.00"/>
                    </span>
                    <p className="text-green-200 text-sm mt-4 mr-4 float-end"> ~ $0.00</p>
                </div>
            </div>


            <div className="w-full h-[40%] rounded-3xl bg-[#cccccc0a] max-sm:bg-transparent">
                <span className="flex justify-between items-center px-5 mt-5">
                <p className="text-gray-400 text-lg">To:</p>
                  <span onClick={() => setShowDropdown3(!showDropdown3)} className='bg-[#cccccc11] relative flex justify-center rounded-4xl text-sm shadow-md max-sm:shadow-none text-gray-50 cursor-pointer p-1 w-35'>
                    <img src="/images/sui.png" alt="Chain" className='rounded-full w-[20px] h-[20px] mr-1'/>
                    0x1635...7d7a 
                    <i className="fa fa-angle-down mt-1"></i>

                    {showDropdown3 && (
                        <div className="absolute top-full right-0 rounded-2xl overflow-hidden mt-1 shadow-md bg-[#222] z-10 min-w-[220px]">
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/solana.png" alt="Solana" className="w-[30px] h-[30px] rounded-full"/> Solana
                            </span>
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/ton.png" alt="Ton" className="w-[30px] h-[30px] rounded-full"/> Ton network
                            </span>
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/sui.png" alt="Sui" className="w-[30px] h-[30px] rounded-full"/> Sui network
                            </span>
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/ethereum.png" alt="Ethereum" className="w-[30px] h-[30px] rounded-full"/> Ethereum (ERC-20)
                            </span>
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/bitcoin.png" alt="Bitcoin" className="w-[30px] h-[30px] rounded-full"/> Bitcoin (BEP-20)
                            </span>
                            <span className="flex justify-between items-center p-2 hover:bg-[#333] cursor-pointer">
                                <img src="/images/tron.png" alt="Tron" className="w-[30px] h-[30px] rounded-full"/> Tron (TRC-20)
                            </span>
                        </div>
                    )}
                    </span>
                </span>

                 <div className="w-[97%] h-[75%] bg-[#cccccc0a] rounded-3xl mx-auto mt-3">
                     <span className="flex justify-between items-center px-5 pt-3">
                        <p className="text-green-200 text-sm">You recieve:</p> <p className="text-gray-50 text-sm font-bold">0.00</p>
                    </span>

                    <span className="flex justify-between items-center px-5 pt-3 mt-[15%] flex-wrap">
                        <span className="flex justify-between items-center cursor-pointer flex-wrap"><img src="/images/usdt.png" alt="Coin" className="rounded-full w-[30px] h-[30px] mr-1"/> <p className="text-gray-50">USDT</p> <i className="fa fa-angle-down ml-1 text-gray-50"></i></span>
                        <input type="text" className="w-[60%] bg-transparent text-right text-xl font-semibold text-gray-100 focus:outline-none caret-green-400" placeholder="0.00"/>
                    </span>
                    <p className="text-green-200 text-sm mt-4 mr-4 float-end"> ~ $0.00</p>
                </div>
            </div>
              <button className="w-full h-[60px] bg-green-400 hover:bg-red-500 transition-all duration-200 rounded-2xl text-left px-6 font-semibold text-gray-950 cursor-pointer mt-2">Confirm Transfer <i className="fa fa-arrow-right float-end"></i></button>
        </div>
    )
}

export default SwapBar