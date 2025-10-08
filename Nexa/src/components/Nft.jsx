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
    <div ref={componentRef} className="justify-center items-center px-2 flex-col max-sm:px-5 mx-auto max-[820px]:bg-[#111] max-[820px]:fixed max-[820px]:w-[90%] max-[820px]:ml-[10%] max-[820px]:rounded-none max-[820px]:px-10 max-[820px]:pt-10 max-sm:pt-2 max-[820px]:h-full z-10 max-sm:w-full max-sm:h-[80%] max-sm:fixed max-sm:bottom-0 max-sm:rounded-b-none max-sm:rounded-t-3xl max-sm:ml-0 max-sm:bg-[#141414] max-sm:shadow-md shadow-white flex w-[30%] h-[700px] bg-gradient-to-b from-transparent to-[#cccccc11] rounded-4xl  backdrop-blur-sm">
      <img src="/images/noassets.png" alt="No assets" />
      <p className='text-lg text-gray-300'>Buy an NFT and it'll be listed here!</p>
    </div>
  );
}

export default NftBox;