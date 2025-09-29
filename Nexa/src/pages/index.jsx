import '../App.css'
import TopBar from '../components/topBar'
import SideBar from '../components/sideBar'
import MainBox from '../components/MainBox'
import SwapBar from '../components/SwapBar'
import NftBox from '../components/Nft'
import Send from '../components/Send'
import Recieve from '../components/Recieve'
import { useState } from 'react'

console.log("Index Page Loaded");
function Index() {
    const [activeComponent, setActiveComponent] = useState('send');

    // Map action names to components
    const componentMap = {
        send: <Send />,
        recieve: <Recieve />,
        swap: <SwapBar />,
        nft: <NftBox />
        // Add more if needed
    };

    return(
        <div className="flex w-full min-h-screen custom-container justify-between flex-wrap pb-5">
            <TopBar />
            <SideBar />
            <MainBox onAction={setActiveComponent} />
            {componentMap[activeComponent]}
        </div>
    )
}

export default Index
