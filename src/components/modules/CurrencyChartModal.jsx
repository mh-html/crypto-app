import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { transformData } from "../helpers/dataUtils";

const deActive = "border-2 border-blue-600 text-blue-600 px-3 rounded-md font-bold";
const active = "border-2 border-blue-600 text-white bg-blue-600 px-3 rounded-md font-bold";

function CurrencyChartModal({ setShowChart, dataChart }) {
  const [typeChart, setTypeChart] = useState("prices");
  
  return (
    <div className="fixed top-0 left-0 z-10 w-screen h-screen backdrop-blur-sm">
      <div
        className="absolute top-2 left-8 text-white px-3 py-1 bg-red-700 text-4xl rounded-md cursor-pointer"
        onClick={() => setShowChart(false)}>
        X
      </div>
      <div className="m-auto mt-10 w-[760px] h-[460px] bg-black/90 p-5 rounded-md">
        <div className="flex items-center mb-3">
          <img className="w-10" src={dataChart.coin.image} alt="" />
          <p className="text-2xl font-bold ml-2">{dataChart.coin.id}</p>
        </div>
        <ResponsiveContainer width="100%" height="70%">
          <LineChart
            width={500}
            height={300}
            data={transformData(dataChart, typeChart)}>
            <CartesianGrid stroke="#404042" />
            <XAxis dataKey="data" hide />
            <YAxis dataKey={typeChart} domain={["auto", "auto"]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={typeChart} stroke="#3874ff" />
          </LineChart>
        </ResponsiveContainer>

        <div className="flex justify-evenly items-center my-2">
          <button
            className={typeChart == "prices" ? active : deActive}
            onClick={() => setTypeChart("prices")}>
            Prices
          </button>
          <button
            className={typeChart == "market_caps" ? active : deActive}
            onClick={() => setTypeChart("market_caps")}>
            Market Caps
          </button>
          <button
            className={typeChart == "total_volumes" ? active : deActive}
            onClick={() => setTypeChart("total_volumes")}>
            Total volume
          </button>
        </div>
        <div className="flex justify-evenly items-center mt-2">
          <div className="flex items-center">
            <p>Price:</p>
            <span className="font-bold ml-2 text-blue-600">$ {dataChart.coin.current_price}</span>
          </div>
          <div className="flex items-center">
            <p>ATH:</p>
            <span className="font-bold ml-2 text-blue-600">$ {dataChart.coin.ath}</span>
          </div>
          <div className="flex items-center">
            <p>Market Caps:</p>
            <span className="font-bold ml-2 text-blue-600"> {dataChart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyChartModal;
