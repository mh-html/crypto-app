import { useEffect, useState } from "react";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";
import { getCoinsList } from "../../services/cryptoApi";

import {
  CoinPagination,
  CoinSearch,
  CoinTable,
  CoinTableRow,
  CurrencyChartModal,
} from "../modules";

function CryptoDashboard() {
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
        const coinsListRes = await axios.get(
          getCoinsList(currentPage, currency)
        );
        setCoins(coinsListRes.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
    };
    getData();
  }, [currentPage, currency]);

  return (
    <div className="container min-h-[80vh] mx-auto text-white max-w-5xl px-3 py-2">
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
          <CoinSearch currency={currency} setCurrency={setCurrency} />
          <CoinTable
            coins={coins}
            setShowChart={setShowChart}
            setDataChart={setDataChart}
            currency={currency}
          />
          {showChart && (
            <CurrencyChartModal
              setShowChart={setShowChart}
              dataChart={dataChart}
            />
          )}
          <CoinPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default CryptoDashboard;
