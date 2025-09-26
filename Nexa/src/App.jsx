import './App.css'
import './components/topBar'
import TopBar from './components/topBar'
import SideBar from './components/sideBar'
import MainBox from './components/MainBox'
import SwapBar from './components/SwapBar'
import NftBox from './components/Nft'
import Send from './components/Send'

function App() {

    return(
        <div className="flex w-full min-h-screen custom-container justify-between flex-wrap pb-5">
            <TopBar></TopBar>
            <SideBar></SideBar>
            <MainBox/>
            <Send/>
        </div>
    )

}



export default App
