import chartUp from "../../../assets/chart-up.svg";
import chartDown from "../../../assets/chart-down.svg";
import { currencySymbols } from "../../helpers/dataUtils";
import { getChart } from "../../../services/cryptoApi";

function CoinTableRow({ coin, currency, setDataChart , setShowChart }) {
  const {
    image,
    id,
    symbol,
    name,
    current_price : currentPrice,
    price_change_percentage_24h: priceChange,
    total_volume,
  } = coin;

  const getChartHandler = async (coin) => {
    const res = await getChart(coin);
    setDataChart({ ...res.data, coin });
    setShowChart(true);
  };

  return (
    <tr className="border-b border-white/30 h-12">
      <td>
        <div
          className="flex flex-row justify-start items-center cursor-pointer"
          onClick={() => getChartHandler(coin)}>
          <img
            className="w-[20px] h-[20px] rounded-full"
            src={image}
            alt={id}
          />
          <span className="ml-1">{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currencySymbols[currency]} {currentPrice.toLocaleString()}
      </td>
      <td className={priceChange > 0 ? "text-green-600" : "text-red-600"}>
        % {priceChange.toFixed(2)}
      </td>
      <td>
        {total_volume.toLocaleString()}
      </td>
      <td>
        <img src={priceChange > 0 ? chartUp : chartDown} alt={id} />
      </td>
    </tr>
  );
}

export default CoinTableRow;
