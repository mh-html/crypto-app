import TableRow from "./TableRow";
import { getCharCrypto } from "../../services/cryptoApi";

function TableCoins({ coins, setShowChart, setDataChart }) {
  
    const getChart = async (id) => {
      try {
        const res = await fetch(getCharCrypto(id));
        const json = await res.json();
        setDataChart(json);
      } catch (err) {
        console.log(err);
      }
      setShowChart(true);
    };

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
          <TableRow
            key={coin.id}
            coin={coin}
            getChart={getChart}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TableCoins;
