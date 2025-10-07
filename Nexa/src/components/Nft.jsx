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
    <div ref={componentRef} className="max-sm:px-5 mx-auto max-md:bg-[#111] max-md:fixed max-md:w-[90%] max-md:ml-[10%] max-md:rounded-none max-md:px-10 max-md:pt-10 max-sm:pt-2 max-md:h-full z-10 max-sm:w-full max-sm:h-[80%] max-sm:fixed max-sm:bottom-0 max-sm:rounded-b-none max-sm:rounded-t-3xl max-sm:ml-0 max-sm:bg-[#141414] max-sm:shadow-md shadow-white flex w-[30%] h-[700px] bg-gradient-to-b from-transparent to-[#cccccc11] rounded-4xl  backdrop-blur-sm">

    </div>
  );
}

export default NftBox;