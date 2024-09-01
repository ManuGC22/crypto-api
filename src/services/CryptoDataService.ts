import axios from "axios";

const COINGECKO_API_URL = "https://api.coingecko.com/api/v3/simple/price";

const getCryptoData = async (symbols: string[]) => {
  try {
    const response = await axios.get(COINGECKO_API_URL, {
      params: {
        ids: symbols.join(","),
        vs_currencies: "usd",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
    throw new Error("Failed to fetch cryptocurrency data");
  }
};

export default getCryptoData;
