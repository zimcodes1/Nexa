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
    const [activeComponent, setActiveComponent] = useState('');

    const componentMap = {
        send: <Send onClose={() => setActiveComponent(null)} />,
        recieve: <Recieve onClose={() => setActiveComponent(null)} />,
        swap: <SwapBar onClose={() => setActiveComponent(null)} />,
        nft: <NftBox onClose={() => setActiveComponent(null)} />
    };

    return (
        <div className="flex w-full min-h-screen custom-container justify-start flex-wrap pb-5  max-sm:pb-0">
            <TopBar />
            <SideBar />
            <MainBox onAction={setActiveComponent} />
            {componentMap[activeComponent]}
        </div>
    );
}

export default Index
