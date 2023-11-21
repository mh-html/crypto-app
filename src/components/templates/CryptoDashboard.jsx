import { useState } from "react";

import { CoinSearch, CoinTable, CurrencyChartModal } from "../modules";

const DEFAULT_CURRENCY = "usd";
function CryptoDashboard() {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [showChart, setShowChart] = useState(false);
  const [dataChart, setDataChart] = useState([]);

  return (
    <main className="container min-h-[80vh] mx-auto text-white max-w-5xl px-3 py-2">
      <CoinSearch currency={currency} setCurrency={setCurrency} />
      <CoinTable
        setShowChart={setShowChart}
        setDataChart={setDataChart}
        currency={currency}
      />
      {showChart && (
        <CurrencyChartModal setShowChart={setShowChart} dataChart={dataChart} />
      )}
    </main>
  );
}

export default CryptoDashboard;
