
function MainBox(){
    return(
        <div className="flex flex-col w-[50%] h-[700px] overflow-hidden">
            <div className=" flex w-full h-[30%] bg-[#cccccc11] rounded-4xl mt-[2%] overflow-hidden">
                <div className="w-[50%] h-full p-5">
                    <h3 className="text-gray-50 text-md">Portfolio Summary</h3>
                    <p className="text-green-200 text-sm mt-5">Available balance</p>
                    <h1 className="text-5xl my-2 text-gray-50">$93530<dot className='text-gray-500'>.450</dot></h1>
                    <p className="mt-1 text-[red] text-sm"><i className="fa fa-angle-down"></i>2.5% (1d) -$130</p>
                </div>
                
                <div className="w-[50%] h-full p-5 overflow-hidden" id='chart'>
                    <img src="/images/chart.png" alt="Chart" className="w-full h-auto"/>
                </div>
            </div>
            <div className="w-full h-[75%] bg-[#cccccc11] rounded-4xl mt-[2%]"></div>
        </div>
    )

}

export default MainBox