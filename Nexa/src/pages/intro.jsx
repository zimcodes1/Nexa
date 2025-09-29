import '../App.css'
import { Link } from 'react-router-dom'

function Intro() {
    return (
        <div className="flex w-full min-h-screen custom-container justify-between flex-wrap pb-5">
            <div className='sticky top-5 z-50 flex px-4 items-center justify-between w-[70%] h-[70px] bg-[#cccccc07] backdrop-blur-3xl rounded-4xl mx-auto mt-5 border border-[#cccccc11]'>
                <span className='logo flex justify-center items-center w-auto'>
                    <img src="/images/logo.png" alt="Nexa" className='w-[40px] h-[40px]'/>
                    <h2 className='text-gray-50 font-[Mont] pl-1'>Nexa</h2>
                </span>
                <span className='text-gray-50 text-sm flex px-4 py-3 rounded-2xl bg-[#cccccc07] backdrop-blur-3xl border border-[#cccccc11] '>
                    <p className='mx-2 cursor-pointer'>Home</p>
                    <p className='mx-2 cursor-pointer'><Link to="/home">Wallet</Link></p>
                    <p className='mx-2 cursor-pointer'>Watchlist</p>
                    <p className='mx-2 cursor-pointer'>News</p>
                    <p className='mx-2 cursor-pointer'>Contact</p>
                </span>
            </div>

            <div className='w-[85%] h-[500px] bg-[#cccccc07] backdrop-blur-3xl rounded-4xl mx-auto mt-8 border border-[#cccccc11] flex justify-center items-center'>
                <div className='w-[50%] h-full flex flex-col justify-center items-start px-10'>
                    <h1 className='text-gray-100 text-4xl font-[Mont] font-bold text-left'>Experience the next generation of Web innovation.</h1>
                    <p className='text-gray-300 mt-3'>Take complete control of your digital assets and explore the world of Web3 with <b>Nexa</b>.</p>

                    <span className='mt-6'>
                        <button className='px-4 py-3 rounded-2xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white'>Get Started <i className="fa fa-arrow-right"></i></button>
                        <button className='px-4 py-3 ml-4 rounded-2xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white'>Download <i className="fa fa-arrow-down"></i></button>
                    </span>
                </div>

                <div className='w-[50%] h-full '>
                    <span>
                        <img src="/images/asset1.png" alt="Nexa Wallet" />
                    </span>
                </div>
            </div>

            <div className='w-[85%] h-[100px] mx-auto mt-8 flex justify-center items-center'>
                <div className='w-[20%]'> <p className='text-gray-200 text-center text-3xl font-bold'>Trusted by over <b className='text-green-400'>340M</b> users</p></div>
                <div className='w-[20%]'> <p className='text-gray-200 text-center text-3xl font-bold'><b className='text-green-400'>Secure</b> and <b className='text-green-400'>Private</b></p></div>
                <div className='w-[20%]'> <p className='text-gray-200 text-center text-3xl font-bold'><b className='text-green-400'>Easy</b> to Use</p></div>
                <div className='w-[20%]'> <p className='text-gray-200 text-center text-3xl font-bold'><b className='text-green-400'>Fast</b> Transactions</p></div>
                <div className='w-[20%]'> <p className='text-gray-200 text-center text-3xl font-bold'>24/7 <b className='text-green-400'>Support</b></p></div>
            </div>

            <div className='w-[85%] h-[400px] bg-[#cccccc07] backdrop-blur-3xl rounded-4xl mx-auto mt-10 border border-[#cccccc11] flex justify-center items-center'>
                <div className='w-[30%] transition-all duration-300 hover:scale-105 h-full flex flex-col justify-center items-center px-10'>
                    <img src="/images/globe.png" alt="Globe" className='w-full h-auto'/>
                </div>

                <div className='w-[70%] h-full flex flex-col justify-center items-end px-10'>
                    <h1 className='text-gray-100 text-3xl font-[Mont] font-bold text-center'>Built entirely on trust</h1>
                    <p className='text-gray-200 mt-3 text-right font-large'>It's widely accepted that <b>collaboration</b> and community effort yield better results for all participants. Our platform is designed to embody this principle by allowing <b>blockchain developers</b> to effortlessly <b>build their decentralized applications (dApps) and wallets natively</b>. This streamlined process enables them to connect with <b>millions of users</b> directly, as they no longer need to concern themselves with the complexities of low-level implementation details.</p>
                    <button className='px-4 py-3 ml-4 mt-3 rounded-2xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white'>Join our community <i className="fa fa-plus"></i></button>
                </div>
            </div>

            <div className='w-[85%] h-[400px] bg-[#cccccc07] backdrop-blur-3xl rounded-4xl mx-auto mt-10 border border-[#cccccc11] flex justify-center items-center'>
                <div className='w-[60%]  h-full flex flex-col justify-center items-start px-10'>
                  <h1 className='text-gray-100 text-2xl font-[Mont] font-bold text-left'>Single platform, inumerable assets!</h1>
                   <p className='text-gray-200 mt-3 text-left font-large'>Our platform supports a wide range of digital assets, allowing users to manage their entire portfolio in one place.</p>

                   <span className='text-gray-300 mt-3 flex flex-col text-left font-bold text-lg'>
                    <p> <b className='text-green-400'>500M+</b> Assets Supported</p>
                    <p> <b className='text-green-400'>500+</b> Blockchains</p>
                    <p> <b className='text-green-400'>1000+</b> DApps Integrated</p>
                    <p> <b className='text-green-400'>50M+</b> NFTs</p>
                   </span>
                    <button className='px-4 py-3 ml-4 mt-3 rounded-2xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white'>Know More<i className="fa fa-arrow-right"></i></button>
                </div>
                <div className='bg-[#cccccc07] w-[40%] rounded-r-3xl h-full flex flex-col justify-center items-center px-10'>
                    <img src="/images/coinwallet.png" alt="Crypto circle" className='w-full h-auto'/>
                </div>
            </div>

            <div className='w-[85%] h-[400px] mx-auto mt-10   flex justify-center items-center flex-col'>
                <h2 className='text-gray-100 text-2xl font-[Mont] font-bold'>Seamless Deposits & Withdrawals</h2>
                <div className='w-full h-[90%]  bg-[#111111e7] border border-[#cccccc11] backdrop-blur-3xl  rounded-4xl flex justify-center items-center px-10 mt-2'>
                    <div className='w-[40%] transition-all duration-300 hover:scale-105 h-full flex flex-col justify-center items-center px-10'>
                        <img src="/images/hand.png" alt="Hand" className='w-full h-auto'/>
                    </div>
                    <div className='w-[60%] flex flex-col items-end'>
                        <h1 className='text-gray-100 text-2xl font-[Mont] font-bold'>Effortless Transactions</h1>
                        <p className='text-gray-200 mt-3 text-right'>Experience seamless deposits and withdrawals with our user-friendly platform. <b>Reclaim ownership of your crypto</b> simply. Skip the confusing steps and <b>deposit funds straight into your wallet</b> from major exchanges, including <b>Binance and Coinbase</b>.</p>
                        <button className='px-4 py-3 ml-4 mt-3 rounded-2xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white'>Get Started<i className="fa fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro