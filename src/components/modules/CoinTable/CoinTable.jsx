import React from "react";
import { CoinTableRow } from "../CoinTableRow/index";

function CoinTable({ coins, currency, setDataChart, setShowChart }) {
  return (
    <table className="mx-auto min-w-[900px]">
      <thead className="border-b-2 border-white">
        <tr className="text-left">
          <th>Coin</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h</th>
          <th>Total Volume</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="border-spacing-5">
        {coins.map((coin) => (
          <CoinTableRow
            key={coin.id}
            coin={coin}
            currency={currency}
            setDataChart={setDataChart}
            setShowChart={setShowChart}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CoinTable;
