import React from "react";
import CoinTableRow from "./CoinTableRow";
import { getCharCrypto } from "../../services/cryptoApi";
import axios from "axios";

function CoinTable({ coins, setShowChart, setDataChart, currency }) {
  const getChart = async (coin) => {
    try {
      const res = await axios.get(getCharCrypto(coin.id));
      setDataChart({ ...res.data, coin });
      setShowChart(true);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  const renderTableHeader = () => (
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
  );

  const renderTableBody = () => (
    <tbody className="border-spacing-5">
      {coins.map((coin) => (
        <CoinTableRow
          key={coin.id}
          coin={coin}
          getChart={getChart}
          currency={currency}
        />
      ))}
    </tbody>
  );

  return (
    <table className="mx-auto min-w-[900px]">
      {renderTableHeader()}
      {renderTableBody()}
    </table>
  );
}

export default CoinTable;
