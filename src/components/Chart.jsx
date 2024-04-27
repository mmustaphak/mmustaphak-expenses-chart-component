import { useState } from "react"
import data from "../data.json"


const Chart = () => {

    const [chartHeight, setChartHeight] = useState()

    const renderedChartData = data.map((expenses) => {
        const percentageSizeofBar = (expenses.amount * 100)/chartHeight
        //Formula to get the value in px and multiplied by 2.5 to scale the bars
        const barHeight = ((160 * percentageSizeofBar)/100)*2
        const barColor = expenses.day == "wed" ? "bg-cyan" : "bg-soft-red"
        return (
            <div key={expenses.day} className="relative flex flex-col items-center">
                <div style={{height: barHeight}} className={`peer min-w-[30px] rounded ${barColor} hover:opacity-75`}></div>
                {/*This is here because the peer marker can only be used on the previous sibling */}
                <p className="absolute -top-7 p-1 invisible rounded-sm text-xs font-semibold text-white bg-dark-brown peer-hover:visible">${expenses.amount}</p>
                <p className="mt-2 text-medium-brown text-xs">{expenses.day}</p>
            </div>
        )
    })

    return (
        <div className="flex justify-between items-end mt-6 min-h-40" ref={node => setChartHeight(node?.clientHeight)}>
            {renderedChartData}
        </div>
    )
}

export default Chart