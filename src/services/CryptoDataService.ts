import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const COINMARKETCAP_API_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
const API_KEY = process.env.COINMARKETCAP_API_KEY;

const getCryptoData = async (symbols: string[]) => {
  try {
    const upperCasedSymbols = symbols.map((symbol) => symbol.toUpperCase());
    const response = await axios.get(COINMARKETCAP_API_URL, {
      params: {
        symbol: upperCasedSymbols.join(","),
        convert: "USD", // Convert the prices to USD
      },
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY, // Set the CoinMarketCap API key
      },
    });

    const coinData: {
      [key: string]: {
        usd: number;
        market_cap: number;
        percent_change_24h: number;
      };
    } = {};
    const data = response.data.data;

    upperCasedSymbols.forEach((symbol) => {
      if (data[symbol]) {
        coinData[symbol.toLowerCase()] = {
          usd: data[symbol].quote.USD.price,
          market_cap: data[symbol].quote.USD.market_cap,
          percent_change_24h: data[symbol].quote.USD.percent_change_24h,
        };
      }
    });

    return coinData;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    throw new Error("Failed to fetch cryptocurrency data");
  }
};

export default getCryptoData;
