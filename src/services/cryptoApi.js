import axios from "axios";

const BASE_URL = "https://api.coingecko.com";
const API_KEY = "CG-RwXHkWf9FzdFxGqkmaWk2V5s";

export const getCoinsList = async (currentPage, currency) => {
  return await axios.get(
    `${BASE_URL}/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${currentPage}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`
  );
};

export const getCoinBaseOnSearch = async (query, signal) => {
  return await axios.get(
    `${BASE_URL}/api/v3/search?query=${query}&x_cg_demo_api_key=${API_KEY}`,
    {
      signal,
    }
  );
};

export const getCharCrypto = async (id) => {
  return await axios.get(
    `${BASE_URL}/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${API_KEY}`
  );
};
