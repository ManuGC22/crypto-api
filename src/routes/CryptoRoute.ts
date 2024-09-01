import { Router } from "express";
import { fetchCryptoData } from "@/controllers";

const router = Router();

router.get("/crypto-price", fetchCryptoData);

export default router;
