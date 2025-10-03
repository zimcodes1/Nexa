import React, { useState } from 'react';

function TopBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        //Topbar Component
        <div className='top-bar w-[100%] h-[70px] flex justify-between items-center pl-5 pr-10 max-sm:pr-3 max-sm:pl-3 max-sm:sticky max-sm:top-0 z-10 max-sm:bg-[#111]'>
            <div className="logo flex justify-center items-center w-auto">
                <img src="/images/logo.png" alt="Nexa" className='w-[40px] h-[40px]'/>
                <h2 className='text-gray-50 font-[Mont] pl-1'>Nexa</h2>
            </div>

            <div className="chain flex justify-center items-center">
                <h2 className='text-gray-50 max-sm:hidden'>Wallet</h2>
                <span 
                    className='bg-[#cccccc31] flex justify-center rounded-4xl text-sm shadow-md text-gray-50 cursor-pointer p-1 ml-[10px] relative'
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <img src="/images/bnb.png" alt="Chain" className='rounded-full w-[20px] h-[20px] mr-1'/>
                    0x2479...bfd9 <i className="fa fa-angle-down mt-1"></i>
                    {showDropdown && (
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
            </div>
            
            <div className="top-options flex justify-between items-center">
                <span className='actionButton '><i className="fa fa-user"></i></span>
                <span className='actionButton'><i className="fa fa-bell"></i></span>
            </div>
        </div>
    )
}

export default TopBar