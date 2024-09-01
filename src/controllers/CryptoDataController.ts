import { Request, Response } from "express";
import { getCryptoData } from "@/services";

const fetchCryptoData = async (req: Request, res: Response) => {
  const { coins } = req.query;

  if (!coins) {
    return res
      .status(400)
      .json({ error: "Please provide a comma-separated list of coin symbols" });
  }

  const symbols = (coins as string).split(",");

  try {
    const data = await getCryptoData(symbols);
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch cryptocurrency data" });
  }
};

export default fetchCryptoData;
