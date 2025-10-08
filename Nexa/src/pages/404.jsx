import { Link } from "react-router-dom"
import "../App.css"

function Lost(){
    return(
        <div> 
              <div className="flex w-full min-h-screen custom-container justify-between flex-wrap pb-5">
        {/* Top Navigation Bar */}
            <div className='sticky top-5 z-50 flex px-4 items-center justify-between w-[70%] max-md:w-[90%] max-sm:w-[95%] h-[70px] bg-[#cccccc07] backdrop-blur-3xl rounded-4xl mx-auto mt-5 border border-[#cccccc11]'>
                <span className='logo flex justify-center items-center w-auto'>
                    <img src="/images/logo.png" alt="Nexa" className='w-[40px] h-[40px]'/>
                    <h2 className='text-gray-50 font-[Mont] pl-1'>Nexa</h2>
                </span>
                <span className='text-gray-50 text-sm flex px-4 py-3 rounded-2xl bg-[#cccccc07] backdrop-blur-lg border border-[#cccccc11] max-md:hidden'>
                    <p className='mx-2 cursor-pointer'>Home</p>
                    <p className='mx-2 cursor-pointer'><Link to="/home">Wallet</Link></p>
                    <p className='mx-2 cursor-pointer'>Watchlist</p>
                    <p className='mx-2 cursor-pointer'>News</p>
                    <p className='mx-2 cursor-pointer'>Contact</p>
                </span>
                {/* Add hamburger menu for mobile */}
                <span className='hidden max-md:block text-2xl text-gray-230 cursor-pointer'>
                    <i className="fa fa-bars"></i>
                </span>
                </div>

            <div className="flex w-full h-full flex-col justify-center items-center">
                <img src="/images/lost.png" alt="404 not found" className="w-[40%]"/>
                <h1 className="text-gray-50 font-bold text-5xl">You've lost your way?</h1>
                <p className="text-gray-400 text-2xl">Let's get you back.</p>
                <button onClick={()=>{history.back()}} className="h-[50px] bg-green-400 hover:bg-red-500 transition-all duration-200 rounded-2xl text-center px-6 font-semibold text-gray-950 cursor-pointer mt-5"><i className="fa fa-angle-left"></i> Back</button>
                
            </div>



                </div>
        </div>
    )
}

export default Lost