import CoinTableRow from "./CoinTableRow";
import { getCharCrypto, getCoinsList } from "../../services/cryptoApi";
import { useEffect, useState } from "react";
import CoinPagination from "./CoinPagination";
import { MutatingDots } from "react-loader-spinner";

const DEFAULT_CURRENT_PAGE = 1;
function CoinTable({ setShowChart, setDataChart, currency }) {
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const coinsListRes = await getCoinsList(currentPage, currency);
        setCoins(coinsListRes.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
    };
    getData();
  }, [currentPage, currency]);

  const getChart = async (coin) => {
    try {
      const { data } = await getCharCrypto(coin.id);
      setDataChart({ ...data, coin });
      setShowChart(true);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  return (
    <>
      {isLoading && (
        <>
          <MutatingDots
            height="100"
            width="100"
            color="#ffffff"
            secondaryColor="#ffffff"
            wrapperStyle={{ justifyContent: "center", marginTop: "10em" }}
          />
          <p className="text-2xl text-center text-white">Loading...</p>
        </>
      )}
      {!isLoading && (
        <>
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
                  getChart={getChart}
                  currency={currency}
                />
              ))}
            </tbody>
          </table>
          <CoinPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </>
  );
}

export default CoinTable;
