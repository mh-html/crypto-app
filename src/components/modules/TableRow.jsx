import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

function TableRow({
  coin: {
    image,
    id,
    symbol,
    name,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  }, getChart
}) {
  return (
    <tr className="border-b border-white/30 h-12">
      <td>
        <div
          className="flex flex-row justify-start items-center cursor-pointer"
          onClick={() =>getChart(id)}>
          <img
            className="w-[20px] h-[20px] rounded-full"
            src={image}
            alt={id}
          />
          <span className="ml-1">{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>$ {current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? "text-green-600" : "text-red-600"}>
        % {price_change.toFixed(2)}
      </td>
      <td>$ {total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={id} />
      </td>
    </tr>
  );
}

export default TableRow;
