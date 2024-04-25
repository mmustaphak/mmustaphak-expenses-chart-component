import data from "../data.json"

const renderedChartData = data.map((expenses)=>{
    return(
        <div key={expenses.day}>
            <div className="min-w-[28px] min-h-32 rounded bg-soft-red"></div>
            <p className="mt-2 text-medium-brown text-xs">{expenses.day}</p>
        </div>
    )
})
const Chart = ()=>{
    return(
        <div className="flex justify-between mt-6">
            {renderedChartData}
        </div>
    )
}

export default Chart