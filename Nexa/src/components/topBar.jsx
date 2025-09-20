
function TopBar(){
    return(
        //Topbar Component
        <div className='top-bar w-[100%] h-[70px] flex justify-between items-center pl-5 pr-[30%]'>

            <div className="logo flex justify-center items-center w-auto">
                <img src="/images/logo.png" alt="Nexa" className='w-[40px] h-[40px]'/>
                <h2 className='text-gray-50 font-[Mont] pl-1'>Nexa</h2>
                </div>

            <div className="chain flex justify-center items-center">
                <h2 className='text-gray-50'>Wallet</h2>
                <span className='bg-[#cccccc31] flex justify-center rounded-4xl text-sm shadow-md text-gray-50 cursor-pointer p-1 ml-[10px]'><img src="/images/bnb.png" alt="Chain" className='rounded-full w-[20px] h-[20px] mr-1'/>0x2479...bfd9 <i className="fa fa-angle-down mt-1"></i></span>
            </div>
            
            <div className="top-options flex justify-between items-center">
                <span className='cursor-pointer text-gray-50 rounded-full bg-[#cccccc31] flex w-[40px] h-[40px] items-center justify-center shadow-md mx-1'><i className="fa fa-user"></i></span>
                <span className='cursor-pointer text-gray-50 rounded-full bg-[#cccccc31] flex w-[40px] h-[40px] items-center justify-center shadow-md mx-1'><i className="fa fa-bell"></i></span>
            </div>
        </div>
    )
}

export default TopBar