import '../App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Slide, Fade } from "react-awesome-reveal";

function Intro() {
    const [device, setDevice] = useState('Mobile');
    return (
        <div className="flex w-full min-h-screen custom-container overflow-hidden justify-between flex-wrap pb-5">
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
                <span className='hidden max-md:block text-2xl text-gray-50 cursor-pointer'>
                    <i className="fa fa-bars"></i>
                </span>
            </div>

            {/* Hero Section */}
            <Fade triggerOnce duration={1000} className='w-full'>
                <div className='w-[85%] max-md:w-[90%] max-sm:w-[95%] max-md:py-10 max-sm:flex-col-reverse max-md:flex-col-reverse h-[500px] max-md:h-auto bg-[#cccccc07] backdrop-blur-3xl rounded-4xl mx-auto mt-8 border border-[#cccccc11] flex justify-center items-center'>
                <div className='w-[50%] max-md:w-full h-full flex flex-col justify-center items-start px-10 max-sm:p-5 overflow-hidden'>
                    <Slide direction='left' duration={1000} triggerOnce>
                        <h1 className='text-gray-100 text-4xl max-md:text-3xl max-sm:text-2xl font-[Mont] font-bold text-left'>Experience the next generation of Web innovation.</h1>
                    </Slide>
                    <Fade direction='top' delay={500} duration={1000} triggerOnce>
                        <p className='text-gray-300 mt-3 max-sm:text-lg'>Take complete control of your digital assets and explore the world of Web3 with <b>Nexa</b>.</p>
                    </Fade>

                    <Slide direction='left' duration={1000} triggerOnce className='mt-6'>
                    <span className='flex w-auto'>
                        <Link to='/home'><button className='px-4 py-3 rounded-2xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white'>Get Started <i className="fa fa-arrow-right"></i></button></Link>
                        <button className='px-4 py-3 ml-4 rounded-2xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white'>Download <i className="fa fa-arrow-down"></i></button>
                    </span>
                    </Slide>

                </div>

                <div className='w-[50%] items-center max-md:w-full h-full max-md:h-fit md:flex max-md:justify-center max-md:items-center p-2 overflow-hidden'>
                    <Slide duration={1000} delay={200} direction='right' triggerOnce>
                    <span>
                        <img src="/images/asset1.png" alt="Nexa Wallet" className='max-sm:w-auto max-sm:h-fauto max-sm:mx-auto max-md:w-auto max-md:h-full max-md:mx-auto'/>
                    </span>
                    </Slide>
                </div>
            </div>
            </Fade>

            {/* Stats Section */}
            <div className='w-[85%] max-md:w-[90%] max-sm:w-[95%] h-[100px] mx-auto mt-8 flex max-md:flex-wrap max-md:h-auto justify-center items-center'>
                <div className='w-[20%] max-md:w-[50%] max-sm:w-full max-md:py-4'> <p className='text-gray-200 text-center text-2xl max-md:text-2xl max-sm:text-xl font-bold'>Trusted by over <b className='text-green-400'>340M</b> users</p></div>
                <div className='w-[20%] max-md:w-[50%] max-sm:w-full max-md:py-4'> <p className='text-gray-200 text-center text-xl max-md:text-2xl max-sm:text-xl font-bold'><b className='text-green-400'>Secure</b> and <b className='text-green-400'>Private</b></p></div>
                <div className='w-[20%] max-md:w-[50%] max-sm:w-full max-md:py-4'> <p className='text-gray-200 text-center text-2xl max-md:text-2xl max-sm:text-xl font-bold'><b className='text-green-400'>Easy</b> to Use</p></div>
                <div className='w-[20%] max-md:w-[50%] max-sm:w-full max-md:py-4'> <p className='text-gray-200 text-center text-2xl max-md:text-2xl max-sm:text-xl font-bold'><b className='text-green-400'>Fast</b> Transactions</p></div>
                <div className='w-[20%] max-md:w-[50%] max-sm:w-full max-md:py-4'> <p className='text-gray-200 text-center text-2xl max-md:text-2xl max-sm:text-xl font-bold'>24/7 <b className='text-green-400'>Support</b></p></div>
            </div>

            {/* Features Section */}
            <Slide direction='left' triggerOnce duration={1000} fraction={0.4} className='w-full'>
           <div className='w-[85%] max-md:w-[90%] max-sm:w-[95%] h-[400px] max-sm:h-auto max-sm:py-5 max-md:h-auto bg-[#cccccc07] backdrop-blur-3xl rounded-4xl mx-auto mt-10 border border-[#cccccc11] flex max-md:flex-col justify-center items-center'>
                <div className='w-[30%] max-md:w-[70%] max-sm:w-[90%] transition-all duration-300 hover:scale-105 h-full flex flex-col justify-center items-center px-10'>
                    <img src="/images/globe.png" alt="Globe" className='w-full h-auto'/>
                </div>

                <div className='w-[70%] max-md:w-full h-full flex flex-col justify-center items-end px-10 max-sm:px-5 max-md:h-auto max-md:py-5'>
                    <h1 className='text-gray-100 text-3xl font-[Mont] font-bold text-center max-sm:text-lg'>Built entirely on trust</h1>
                    <p className='text-gray-200 mt-3 text-right font-large'>It's widely accepted that <b>collaboration</b> and community effort yield better results for all participants. Our platform is designed to embody this principle by allowing <b>blockchain developers</b> to effortlessly <b>build their decentralized applications (dApps) and wallets natively</b>. This streamlined process enables them to connect with <b>millions of users</b> directly, as they no longer need to concern themselves with the complexities of low-level implementation details.</p>
                    <button className='px-4 py-3 ml-4 mt-3 rounded-2xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white'>Join our community <i className="fa fa-plus"></i></button>
                </div>
            </div>
            </Slide>
 
            <Slide duration={1000} triggerOnce className='w-full' direction='right' fraction={0.4}>
            <div className='w-[85%] h-[400px] max-md:w-[90%] max-sm:w-[95%] max-sm:h-auto max-sm:py-5 max-sm:flex-col-reverse bg-[#cccccc07] backdrop-blur-3xl rounded-4xl mx-auto mt-10 border border-[#cccccc11] flex justify-center items-center'>
                <div className='w-[60%] max-sm:w-full h-full max-md:h-auto flex flex-col justify-center items-start px-5'>
                  <h1 className='text-gray-100 text-2xl font-[Mont] font-bold text-left max-sm:text-lg max-sm: mt-2'>Single platform, inumerable assets!</h1>
                   <p className='text-gray-200 mt-3 text-left font-large'>Our platform supports a wide range of digital assets, allowing users to manage their entire portfolio in one place.</p>

                   <span className='text-gray-300 mt-3 flex flex-col text-left font-bold text-lg'>
                    <p> <b className='text-green-400'>500M+</b> Assets Supported</p>
                    <p> <b className='text-green-400'>500+</b> Blockchains</p>
                    <p> <b className='text-green-400'>1000+</b> DApps Integrated</p>
                    <p> <b className='text-green-400'>50M+</b> NFTs</p>
                   </span>
                    <button className='px-4 py-3 ml-4 max-sm:ml-0 mt-3 rounded-2xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white'>Know More<i className="fa fa-arrow-right"></i></button>
                </div>
                <div className='bg-[#cccccc07] w-[40%] max-sm:w-[95%] max-sm:rounded-2xl rounded-r-3xl h-full flex flex-col justify-center items-center px-10'>
                    <img src="/images/coinwallet.png" alt="Crypto circle" className='w-full h-auto'/>
                </div>
            </div>
            </Slide>

            <Slide duration={800} triggerOnce className='w-full' direction='up' fraction={0.3}>
                <div className='w-[85%] h-[400px] mx-auto mt-10 max-sm:w-[95%] max-sm:h-auto max-sm:mt-5 flex justify-center items-center flex-col'>
                <h2 className='text-gray-100 text-2xl font-[Mont] font-bold max-sm:text-lg max-sm:text-center'>Seamless Deposits & Withdrawals</h2>
                <div className='w-full h-[90%] max-sm:py-5 max-sm:flex-col bg-[#111111e7] border border-[#cccccc11] backdrop-blur-3xl  rounded-4xl flex justify-center items-center px-10 mt-2'>
                    <div className='w-[40%] max-sm:w-full transition-all duration-300 hover:scale-105 h-full flex flex-col justify-center items-center px-10'>
                        <img src="/images/hand.png" alt="Hand" className='w-full h-auto'/>
                    </div>
                    <div className='w-[60%] max-sm:w-full flex flex-col items-end'>
                        <h1 className='text-gray-100 text-2xl max-sm:text-lg max-sm:mt-2 font-[Mont] font-bold'>Effortless Transactions</h1>
                        <p className='text-gray-200 mt-3 text-right'>Experience seamless deposits and withdrawals with our user-friendly platform. <b>Reclaim ownership of your crypto</b> simply. Skip the confusing steps and <b>deposit funds straight into your wallet</b> from major exchanges, including <b>Binance and Coinbase</b>.</p>
                        <button className='px-4 py-3 ml-4 mt-3 rounded-2xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white'>Get Started<i className="fa fa-arrow-right"></i></button>
                    </div>
                </div>
                </div>
            </Slide>

            {/* Security Section */}

            <Fade duration={1000} fraction={0.4} delay={300} triggerOnce className='w-full'>
            <div className='w-[85%] h-[430px] max-md:h-auto max-sm:h-auto max-sm:w-[95%] mx-auto mt-10 flex justify-center items-center flex-col'>
                <h2 className='text-gray-100 text-2xl font-[Mont] font-bold max-sm:text-lg'>Privacy & Security</h2>
                <div className='w-full h-[80%] max-md:h-auto flex max-sm:flex-col justify-evenly items-center mt-3 max-md:flex-wrap max-md:justify-center'>
                    <div className='w-[30%] max-md:m-1 max-md:h-[300px] max-md:w-[45%] max-sm:w-full shadow-md p-8 h-full flex flex-col justify-center items-center rounded-3xl bg-[#cccccc10] border border-[#ffffff10] backdrop-blur-3xl transition-all duration-300 hover:scale-105'>
                        <h3 className='text-gray-100 text-lg font-[Mont] font-bold text-center'>Data Encryption</h3>
                        <img src="/images/cloud.png" alt="Cloud" className='h-[75%] w-[75%] max-sm:w-auto' />
                        <p className='text-gray-200'>Upgrade your <b>wallet security</b> with our <b>Encrypted Cloud Backup</b>.</p>
                    </div>
                    <div className='w-[30%] max-md:m-1 max-md:h-[300px] max-md:w-[45%] max-sm:w-full max-sm:mt-2 shadow-md p-8 h-full flex flex-col justify-center items-center rounded-3xl bg-[#cccccc10] border border-[#ffffff10] backdrop-blur-3xl transition-all duration-300 hover:scale-105'>
                        <h3 className='text-gray-100 text-lg font-[Mont] font-bold text-center'>Double Authentication</h3>
                        <img src="/images/shield.png" alt="Shield" className='h-[75%] w-[75%] max-sm:w-auto' />
                        <p className='text-gray-200'><b>We implement</b> two-factor authentication for maximum security and user protection.</p>
                    </div>
                    <div className='w-[30%] max-md:m-1 max-md:h-[300px] max-md:w-[45%] max-sm:w-full max-sm:mt-2 shadow-md p-8 h-full flex flex-col justify-center items-center rounded-3xl bg-[#cccccc10] border border-[#ffffff10] backdrop-blur-3xl transition-all duration-300 hover:scale-105'>
                        <h3 className='text-gray-100 text-lg font-[Mont] font-bold text-center'>Proactive Alerts</h3>
                        <img src="/images/alert.png" alt="Bulb" className='h-[75%] w-[75%] max-sm:w-auto' />
                        <p className='text-gray-200'>We implement <b>proactive security alerts</b> to notify you instantly of unusual activity.</p>
                    </div>
                </div>
             <button className='px-4 py-2 mt-4 rounded-2xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white'>Learn More<i className="fa fa-arrow-right"></i></button>
            </div>
            </Fade>

            {/* Device Selection Section */}
            <div className='w-[85%] max-md:w-[90%] max-sm:w-[95%] h-[480px] max-md:h-auto mx-auto mt-10 max-sm:mt-10 flex max-md:flex-col-reverse px-5 max-md:px-0 max-sm:px-0 items-center justify-evenly'>
                <Fade duration={800} direction='left' className='w-[45%] h-full max-md:w-full'>
                <div className='w-full bg-[#cccccc07] border border-[#cccccc11] rounded-2xl max-sm:rounded-t-none max-md:rounded-t-none h-full flex flex-col p-8 max-sm:p-4 justify-center'>
                    <h2 className='font-[Mont] text-gray-100 text-2xl max-sm:text-lg'>Your one-stop crypto wallet.</h2>
                    <p className='text-gray-200 mt-2'>Buy, sell, and swap crypto, earn rewards, manage NFTs, and discover DApps, all in one place.</p>

                    <span className='flex w-full rounded-3xl py-1 border-2 border-[#cccccc11] mt-5 justify-evenly'>
                        <button 
        onClick={() => setDevice('Mobile')} 
        className={`py-2 w-[32%] rounded-3xl cursor-pointer transition-all duration-300 font-bold max-sm:text-sm
            ${device === 'Mobile' 
                ? 'bg-green-500 text-gray-950' 
                : 'text-green-500'}`}
    >
        Mobile <i className="fa fa-mobile"></i>
    </button>
    <button 
        onClick={() => setDevice('Desktop')} 
        className={`py-2 w-[32%] rounded-3xl cursor-pointer transition-all duration-300 font-bold max-sm:text-sm
            ${device === 'Desktop' 
                ? 'bg-green-500 text-gray-950' 
                : 'text-green-500'}`}
    >
        Desktop <i className="fa fa-desktop"></i>
    </button>
    <button 
        onClick={() => setDevice('Extension')} 
        className={`py-2 w-[32%] rounded-3xl cursor-pointer transition-all duration-300 font-bold max-sm:text-sm
            ${device === 'Extension' 
                ? 'bg-green-500 text-gray-950' 
                : 'text-green-500'}`}
    >
        Extension <i className="fa fa-puzzle-piece"></i>
    </button>
                    </span>
                        <button className='w-[50%] max-sm:w-[80%] max-md:mx-auto max-sm:mx-auto py-2 mt-5 rounded-3xl border-2 border-green-500 text-green-500 cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-gray-950'>Download {device} App <i className="fa fa-download"></i></button>
                </div>
                </Fade>

                <Fade duration={800} direction='right' className='w-[45%] max-md:w-full h-full'>
                <div className='max-sm:rounded-b-none max-md:rounded-b-none  bg-gray-100 border border-[#cccccc11] rounded-2xl h-full flex items-center justify-center p-8 max-sm:p-4'>
                    <img src={device === 'Mobile' ? "/images/mobile.png" : device === 'Desktop' ? "/images/pcview.png" : "/images/extension.png"} alt={`${device} view`} />
                </div>
                </Fade>
            </div>

             {/* Footer Section */}
             <div className='w-[85%] max-md:w-[90%] max-sm:w-[95%] h-[480px] max-md:h-auto mx-auto mt-10 flex max-md:flex-col px-5 items-center justify-evenly bg-[#cccccc07] border border-[#cccccc11] rounded-4xl max-sm:px-2'>
                <div className='w-[30%] max-md:w-full h-full max-md:h-auto max-sm:hidden flex items-center justify-center p-8 max-sm:p-4 flex-col'>
                    <h2 className='font-[Mont] text-gray-100 text-4xl'>Nexa</h2>
                    <img src="/images/logo.png" alt="Team" className='w-full h-auto max-md:w-[20%]' />
                </div>
                <div className='w-[70%] max-md:w-full h-full flex flex-col justify-center items-start p-8 max-sm:p-4 rounded-r-4xl bg-[#cccccc07] max-sm:bg-transparent border border-[#cccccc11] backdrop-blur-3xl max-sm:border-0 max-sm:rounded-3xl max-md:rounded-3xl max-md:mb-5 max-md:h-auto max-md:py-4'>
                    <div className='w-full h-[70%] max-sm:h-auto flex max-md:flex-wrap justify-evenly items-start'>
                        <ul className='text-gray-100 text-sm max-md:w-[33%] max-sm:w-[50%] max-sm:mb-4'> <h4 className='font-bold mb-2'>Wallet</h4>
                            <li className='mt-1'><a href="#">Mobile App</a></li>
                            <li className='mt-1'><a href="#">Desktop App</a></li>
                            <li className='mt-1'><a href="#">Browser Extension</a></li>
                            <li className='mt-1'><a href="#">Multi-Currency Support</a></li>
                        </ul>
                        <ul className='text-gray-100 text-sm max-md:w-[33%] max-sm:w-[50%] max-sm:mb-4'>
                            <h4 className='text-gray-100 font-bold mb-2'>Services</h4>
                            <li className='mt-1'><a href="#">Buy Crypto</a></li>
                            <li className='mt-1'><a href="#">Sell Crypto</a></li>
                            <li className='mt-1'><a href="#">Swap Crypto</a></li>
                            <li className='mt-1'><a href="#">Earn Rewards</a></li>
                        </ul>
                        <ul className='text-gray-100 text-sm max-md:w-[33%] max-sm:w-[50%] max-sm:mb-4'>
                            <h4 className='text-gray-100 font-bold mb-2'>Build</h4>
                            <li className='mt-1'><a href="#">SDK</a></li>
                            <li className='mt-1'><a href="#">API Documentation</a></li>
                            <li className='mt-1'><a href="#">Developer Tools</a></li>
                            <li className='mt-1'><a href="#">Get asset listed</a></li>
                            <li className='mt-1'><a href="#">Submit DApp</a></li>
                        </ul>
                        <ul className='text-gray-100 text-sm max-md:w-[33%] max-sm:w-[50%] max-sm:mb-4'>
                            <h4 className='text-gray-100 font-bold mb-2'>Support</h4>
                            <li className='mt-1'><a href="#">FAQ</a></li>
                            <li className='mt-1'><a href="#">Contact Us</a></li>
                            <li className='mt-1'><a href="#">Community Forum</a></li>
                        </ul>
                        <ul className='text-gray-100 text-sm max-md:w-[33%] max-sm:w-[100%] max-sm:mb-4'>
                            <h4 className='text-gray-100 font-bold mb-2'>About</h4>
                            <li className='mt-1'><a href="#">Our Mission</a></li>
                            <li className='mt-1'><a href="#">Team</a></li>
                            <li className='mt-1'><a href="#">Blog</a></li>
                            <li className='mt-1'><a href="#">Careers</a></li>
                            <li className='mt-1'><a href="#">Privacy Policy</a></li>
                            <li className='mt-1'><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className='w-full h-[30%] max-md:h-auto flex justify-start items-start max-sm:flex-col max-md:flex-col'>
                        <div className='w-[50%] max-md:w-full max-sm:w-full h-full flex flex-col justify-center items-start'>
                         <span>
                            <h5 className='text-gray-100 font-bold max-md:text-center'>Download Nexa</h5>
                        </span>
                        <span className='flex w-full justify-evenly'>
                            <button className='border text-sm mt-2 border-green-500 text-gray-100 py-1 px-4 rounded-3xl transition-all duration-300 hover:bg-green-500 hover:text-gray-950'>Download Apk <i className="fab fa-android"></i></button>
                            <button className='border text-sm mt-2 border-green-500 text-gray-100 py-1 px-4 rounded-3xl transition-all duration-300 hover:bg-green-500 hover:text-gray-950'>Download for iOS <i className="fab fa-apple"></i></button>
                        </span>
                        <span className='flex w-full justify-evenly'>
                            <button className='border text-sm mt-2 border-green-500 text-gray-100 py-1 px-4 rounded-3xl transition-all duration-300 hover:bg-green-500 hover:text-gray-950'>Extension <i className="fab fa-windows"></i></button>
                            <button className='border text-sm mt-2 border-green-500 text-gray-100 py-1 px-4 rounded-3xl transition-all duration-300 hover:bg-green-500 hover:text-gray-950'>Download for Mac <i className="fab fa-apple"></i></button>
                        </span>
                        </div>
                        <div className='w-[50%] max-md:w-full max-md:mt-2 max-sm:w-full h-full flex flex-col justify-start'>
                            <span> <h5 className='text-gray-100 font-bold text-center max-sm:mt-3'>Join Our Community</h5></span>
                            <span className='flex w-full justify-start max-sm:justify-evenly max-md:justify-evenly  max-sm:mt-2 mt-4 max-md:mt-1 items-center flex-wrap'>
                                <a href="#" className='text-gray-100 text-2xl ml-2 p-2 rounded-2xl bg-[#cccccc11]'><i className="fab fa-discord"></i></a>
                                <a href="https://t.me/Azimiles" target='_blank' className='text-gray-100 m-1 text-2xl ml-2 p-2 rounded-2xl bg-[#cccccc11]'><i className="fab fa-telegram"></i></a>
                                <a href="https://wa.me/qr/SHDC4BMBJLIKHT" target='_blank' className='text-gray-100 m-1 text-2xl ml-2 p-2 rounded-2xl bg-[#cccccc11]'><i className="fab fa-whatsapp"></i></a>
                                <a href="https://facebook.com/azimeh" target='_blank' className='text-gray-100 m-1 text-2xl ml-2 p-2 rounded-2xl bg-[#cccccc11]'><i className="fab fa-facebook"></i></a>
                                <a href="https://github.com/zimcodes1" target='_blank' className='text-gray-100 m-1 text-2xl ml-2 p-2 rounded-2xl bg-[#cccccc11]'><i className="fab fa-github"></i></a>
                                 <a href="https://x.com/azimeho" target='_blank' className='text-gray-100 m-1 text-2xl ml-2 p-2 rounded-2xl bg-[#cccccc11]'><i className="fab fa-x-twitter"></i></a>
                            </span>
                           
                        </div>
                    </div>


                    
                </div>
             </div>
             <span className='px-30 max-sm:px-auto  flex justify-between max-sm:justify-center max-md:justify-center items-center w-full mt-5 max-sm:mt-2 max-sm:px-0'>
               <p className='text-gray-200 max-sm:text-sm'>© 2025 Nexa. All rights reserved.</p>
                        <div className='flex space-x-4 max-sm:hidden max-md:hidden'>
                            <a href="#" className='text-gray-200'>Privacy Policy</a>
                            <a href="#" className='text-gray-200'>Terms of Service</a>
                        </div>
             </span>
        </div>
    )
}

export default Intro