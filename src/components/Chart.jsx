import { useState } from "react"
import data from "../data.json"


const Chart = () => {

    const [chartHeight, setChartHeight] = useState()

    const renderedChartData = data.map((expenses) => {
        const percentageSizeofBar = (expenses.amount * 100)/chartHeight
        //Formula to get the value in px and multiplied by 2.5 to scale the bars
        const barHeight = ((160 * percentageSizeofBar)/100)*2.5
        return (
            <div key={expenses.day}>
                <div style={{height: barHeight}} className="min-w-[28px] rounded bg-soft-red"></div>
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