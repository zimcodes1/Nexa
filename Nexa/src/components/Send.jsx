

function Send(coin){
    return(
        <div className="flex w-[30%] h-[700px] bg-gradient-to-b from-transparent to-[#cccccc11] rounded-4xl mr-5 p-5 flex-wrap backdrop-blur-sm">
            <div className="w-full">
                <h1 className="text-gray-50 text-xl font-bold">Send Crypto</h1>
                <p className="text-gray-50 text-sm mt-10">Select coin & network:</p>
                <div className="flex justify-between items-center mt-5 w-full rounded-md bg-[#cccccc0a] p-3">
                    <span className="flex justify-between items-center">
                         <img src="/images/bnb.png" alt="Coin" className="rounded-full w-[30px] h-[30px] mr-1"/>
                        <p className="text-gray-50"> Binance Coin (BNB)</p>
                    </span>

                    <select className="cursor-pointer bg-transparent border border-none text-gray-500 p-2 rounded-md active:outline-none focus:outline-none">
                        <option value="BNB">BNB</option>
                        <option value="ETH">Ethereum</option>
                        <option value="SOL">Solana</option>
                    </select>
                </div>

                <span className="flex w-full justify-between items-center mt-10">
                    <p className="text-gray-50 text-sm">Recipient Address:</p>
                    <i className="fa fa-contact-book text-amber-50"></i>
                </span>
                <div className="flex justify-center h-[60px] items-center rounded-md bg-[#cccccc0a] mt-5">
                    <input type="text" placeholder="0x16s....17x2" className="w-[90%] pl-2 h-full text-gray-100 active:outline-none focus:outline-none"/>
                    <i className="fa fa-qrcode text-gray-100 text-lg hover:text-green-400 cursor-pointer"></i>
                </div>

                <p className="text-gray-50 text-sm mt-10">Amount:</p>
                 <div className="flex justify-center h-[60px] items-center rounded-md bg-[#cccccc0a] mt-5">
                    <input type="text" placeholder="0.00 BNB" className="w-[90%] pl-3 h-full text-gray-100 active:outline-none focus:outline-none"/>
                    <p className="text-sm font-bold text-green-400 cursor-pointer pr-2">MAX</p>
                </div>

                 <i className="block text-gray-50 text-sm mt-3 text-center">Please do well to cross-check the wallet recipients's wallet address and amount you want to send because crypto transactions are irreversible and you'll be responsible for your loses if any!</i>
                <button className="w-full h-[50px] rounded-md bg-green-400 text-gray-950 mt-10 font-bold">Send <i className="fa fa-arrow-right"></i></button>
            </div >
        </div>
    )
}

export default Send