import React, { useEffect, useState } from "react";
import { searchCoins } from "../../../services/cryptoApi";
import { MutatingDots } from "react-loader-spinner";
import axios from "axios";

function CoinSearch({ currency, setCurrency }) {
  const [searchValue, setSearchValue] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCoins([]);
    if (!searchValue) {
      setCoins([]);
      return;
    }

    const search = setTimeout(async () => {
      setIsLoading(true);
      const json = await axios.get(searchCoins(searchValue));
      setIsLoading(false);
      setCoins(json.data.coins);
    }, 1500);

    return () => clearTimeout(search);
  }, [searchValue]);

  return (
    <div className="relative mb-8">
      <input
        className="border border-white rounded-md bg-transparent placeholder:text-white valid:text-white px-2 py-1 w-72 focus:outline-none"
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <select
        className="ml-5 bg-blue-900 border border-blue-500 rounded-md px-2 py-1 font-semibold"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
        <option value="gbp">GBP</option>
        <option value="sar">SAR</option>
      </select>
      {!!searchValue && (
        <div className="absolute top-16 bg-black/40 overflow-y-scroll backdrop-blur-md h-60 p-2 w-72 border border-blue-500 rounded-md">
          <ul className="w-full h-full">
            {!!coins.length && !isLoading ? (
              coins.map((coin) => (
                <li
                  key={coin.id}
                  className="flex justify-start items-center mt-3 border-b border-white/40">
                  <img src={coin.thumb} alt={coin.id} />
                  <span className="ml-2">{coin.name}</span>
                </li>
              ))
            ) : (
              <MutatingDots
                height="100"
                width="100"
                color="#ffffff"
                secondaryColor="#ffffff"
                wrapperStyle={{ justifyContent: "center", marginTop: "3em" }}
              />
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CoinSearch;
