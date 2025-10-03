import { useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';

function NftBox({ onClose }) {
  const componentRef = useRef();
  useClickOutside(componentRef, () => {
    if (window.innerWidth <= 640) {
      onClose();
    }
  });

  return (
    <div ref={componentRef} className="max-sm:w-full max-sm:h-[80%] max-sm:fixed max-sm:bottom-0 max-sm:rounded-b-none max-sm:bg-[#111] flex w-[30%] h-[700px] bg-gradient-to-b from-transparent to-[#cccccc11] rounded-4xl mr-5 pb-5 px-[2.5%] flex-wrap backdrop-blur-sm overflow-scroll scrollbar-hide">
      <div className="w-full h-[40px] p-1 sticky top-0 bg-transparent z-10 backdrop-blur-3xl"><h3 className="text-gray-50 text-lg font-bold">NFT</h3></div>
      <div className="w-full h-[320px] mt-3 rounded-2xl flex justify-center flex-wrap bg-[#00000031] overflow-hidden">
          <div className="w-full h-[85%] overflow-hidden p-0">
              <img src="/images/nft1.jpg" alt="NFT" className="w-full brightness-50 hover:brightness-100  transition-all duration-200"/>
          </div>
          <div className="w-full h-15% px-5 flex justify-between items-center pb-2">
              <span className="flex">
                  <img src="/images/bnb.png" alt="Network" className="w-5 h-5 rounded-full mr-2"/>
                  <p className="text-gray-50 text-sm font-semibold">Bored Ape YC</p>
              </span>
              <p className="text-green-200 text-sm">Floor price: 0.5 BNB</p>
          </div>
      </div>

     <div className="w-full h-[320px] mt-3 rounded-2xl flex justify-center flex-wrap bg-[#00000031] overflow-hidden">
          <div className="w-full h-[85%] overflow-hidden p-0">
          <img src="/images/nft2.jpeg" alt="NFT" className="w-full transition-all duration-200 brightness-50 hover:brightness-100"/>
          </div>

          <div className="w-full h-15% px-5 flex justify-between items-center pb-2">
              <span className="flex">
                  <img src="/images/ethereum.png" alt="Network" className="w-5 h-5 rounded-full mr-2"/>
                  <p className="text-gray-50 text-sm font-semibold">Pudgy Penguins</p>
              </span>
              <p className="text-green-200 text-sm">Floor price: 3.82 ETH</p>
          </div>
      </div>

       <div className="w-full h-[320px] mt-3 rounded-2xl flex justify-center flex-wrap bg-[#00000031] overflow-hidden">
          <div className="w-full h-[85%] overflow-hidden p-0">
          <img src="/images/nft3.jpg" alt="NFT" className="w-full transition-all duration-200 brightness-50 hover:brightness-100"/>
          </div>

          <div className="w-full h-15% px-5 flex justify-between items-center pb-2">
              <span className="flex">
                  <img src="/images/bnb.png" alt="Network" className="w-5 h-5 rounded-full mr-2"/>
                  <p className="text-gray-50 text-sm font-semibold">Smart Ape YC</p>
              </span>
              <p className="text-green-200 text-sm">Floor price: 1.4 BNB</p>
          </div>
      </div>

    </div>
  );
}

export default NftBox;