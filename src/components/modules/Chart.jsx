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

import { convertData } from "../helpers/ConvertArrToObj";
import { useState } from "react";

const deActive =
  "border-2 border-blue-600 text-blue-600 px-3 py-1 rounded-md font-bold";
const active =
  "border-2 border-blue-600 text-white bg-blue-600 px-3 py-1 rounded-md font-bold";

function Chart({ setShowChart, dataChart }) {
  const [typeChart, setTypeChart] = useState("prices");

  return (
    <div className="fixed top-0 left-0 z-10 w-screen h-screen backdrop-blur-sm">
      <div
        className="absolute top-2 left-8 text-white px-3 py-1 bg-red-700 text-4xl rounded-md cursor-pointer"
        onClick={() => setShowChart(false)}>
        X
      </div>
      <div className="m-auto mt-10 w-[900px] h-[360px] bg-black/90 p-5 rounded-md">
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            width={500}
            height={300}
            data={convertData(dataChart, typeChart)}>
            <CartesianGrid stroke="#404042" />
            <XAxis dataKey="data" hide />
            <YAxis dataKey={typeChart} domain={["auto", "auto"]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={typeChart} stroke="#3874ff" />
          </LineChart>
        </ResponsiveContainer>

        <div className="flex justify-around items-center mt-2">
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
      </div>
    </div>
  );
}

export default Chart;
