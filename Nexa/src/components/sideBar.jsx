
const SideBar = ()=>{
    return(
        <div className="w-[15%] h-full ml-[10px] max-sm:hidden max-md:hidden">
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
    )
}


export default SideBar