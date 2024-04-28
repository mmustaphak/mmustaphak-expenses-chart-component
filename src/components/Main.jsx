import Chart from "./Chart.jsx"

const Main = ()=>{
    return(
        <main className="mt-4 p-4 rounded-lg bg-white text-dark-brown min-[400px]:p-6 min-[400px]:rounded-xl">
            <h2 className="font-bold text-xl">Spending - Last 7 days</h2>
            <Chart/>
            <hr className="border mt-4" />
            <div className="flex justify-between mt-4">
                <div>
                    <p className="text-medium-brown"><small>Total this month</small></p>
                    <strong className="text-2xl">$478.33</strong>
                </div>
                <div>
                    <p className="font-bold text-end"><small>+2.4%</small></p>
                    <p className="text-medium-brown">from last month</p>
                </div>
            </div>
        </main>
    )
}

export default Main