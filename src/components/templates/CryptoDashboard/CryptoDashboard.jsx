import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";

import {CoinTable} from "../../modules/CoinTable/index";
import {CoinSearch} from "../../modules/CoinSearch/index";
import {CurrencyChartModal} from "../../modules/CurrencyChartModal/index";
import {CoinPagination} from "../../modules/CoinPagination/index";

import { fetchCoinsData } from "../../../services/cryptoApi";

function CryptoDashboard() {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currency, setCurrency] = useState("usd");
  const [showChart, setShowChart] = useState(false);
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    (async () =>{
      setIsLoading(true);
      const coinsListRes = await fetchCoinsData(currentPage, currency)
      setCoins(coinsListRes.data);
      setIsLoading(false);
    })()
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
