
const SideBar = ()=>{
    return(
        <>
        <div className="w-[15%] h-full ml-[10px] max-[820px]:ml-1 max-[820px]:hidden">
            <ul className="text-gray-200 mt-2"><p className="font-bold ml-4">Menu</p>
                <li className="sideBut"><i className="fa fa-home"></i> Home</li>
                <li className="sideBut"><i className="fa fa-wallet"></i> Wallet</li>
                <li className="sideBut"><i className="fa fa-bookmark"></i> Watchlist</li>
                <li className="sideBut"><i className="fa fa-eur"></i> Transactions</li>
                <p className="mt-2 ml-4 font-bold">Tools</p>
                <li className="sideBut"><i className="fa fa-compass"></i> Market</li>
                <li className="sideBut"><i className="fa fa-line-chart"></i> Analysis</li>
                <p className="mt-2 ml-4 font-bold">User</p>
                <li className="sideBut"><i className="fa fa-cog"></i> Settings</li>
                <li className="sideBut"><i className="fa fa-headphones"></i> Support</li>

            </ul>
        </div>

        <div className="hidden max-[820px]:flex flex-col max-sm:hidden fixed w-[70px] bg-[#cccccc11] h-full top-0 py-1">
            <span>
                <img src="/images/logo.png" alt="Logo" />
            </span>

            <span className='text-gray-200 text-3xl mx-auto mt-6'>
                <i className="fa fa-home"></i>
            </span>
            <span className='text-gray-200 text-2xl mx-auto mt-6'>
                <i className="fa fa-wallet"></i>
            </span>
            <span className='text-gray-200 text-2xl mx-auto mt-6'>
                <i className="fa fa-bookmark"></i>
            </span>
            <span className='text-gray-200 text-2xl mx-auto mt-6'>
                <i className="fa fa-dollar"></i>
            </span>
            <span className='text-gray-200 text-2xl mx-auto mt-6'>
                <i className="fa fa-compass"></i>
            </span>
            <span className='text-gray-200 text-2xl mx-auto mt-6'>
                <i className="fa fa-line-chart"></i>
            </span>
            <span className='text-gray-200 text-2xl mx-auto mt-6'>
                <i className="fa fa-user"></i>
            </span>
            <span className='text-gray-200 text-2xl mx-auto mt-6'>
                <i className="fa fa-cog"></i>
            </span>
        </div>
        </>
    )
}


export default SideBar