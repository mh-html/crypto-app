import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import { getCoinsList } from "../../services/cryptoApi";

import TableCoins from "../modules/TableCoins";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [showChart, setShowChart] = useState(false);
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const coinsListRes = await fetch(getCoinsList(currentPage, currency));
        const coinsListJson = await coinsListRes.json();
        setCoins(coinsListJson);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [currentPage, currency]);

  return (
    <div className="container mx-auto text-white max-w-5xl px-3 py-2">
      {isLoading ? (
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
      ) : (
        <>
          <Search currency={currency} setCurrency={setCurrency} />
          <TableCoins
            coins={coins}
            setShowChart={setShowChart}
            setDataChart={setDataChart}
            />
            {showChart && (
              <Chart setShowChart={setShowChart} dataChart={dataChart} />
            )}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default HomePage;
