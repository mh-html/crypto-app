import React, { useEffect, useState } from "react";
import { searchCoins } from "../../services/cryptoApi";
import { MutatingDots } from "react-loader-spinner";

function Search({ currency, setCurrency }) {
  const [searchValue, setSearchValue] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const controller = new AbortController();
    setCoins([])
    if (!searchValue) {
      setCoins([]);
      return;
    }
    try {
      setIsLoading(true);
      const serch = async () => {
        const res = await fetch(searchCoins(searchValue), {
          signal: controller.signal,
        });
        const json = await res.json();
        setIsLoading(false);
        setCoins(json.coins);
      };
      serch();
    } catch (err) {
      setIsLoading(false);
      alert("Not Founded!");
    }
    return () => controller.abort();
  }, [searchValue]);

  return (
    <div className="relative ml-10 my-14 p-3">
      <input
        className="border border-blue-500 rounded-md bg-transparent placeholder:text-white valid:text-white px-2 py-1 w-72 focus:outline-none"
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <select
        className="ml-5 bg-black border border-blue-500 rounded-md px-2 py-1 "
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}>
        <option className="" value="usd">
          USD
        </option>
        <option className="" value="eur">
          EUR
        </option>
        <option className="" value="jpy">
          JPY
        </option>
      </select>
      {!!searchValue && (
        <div className="absolute top-16 bg-black/50 overflow-y-scroll backdrop-blur-md h-60 p-2 w-72 border border-blue-500 rounded-md">
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

export default Search;
