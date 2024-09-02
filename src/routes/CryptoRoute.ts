import { Router } from "express";
import { fetchCryptoData } from "@/controllers";

const router = Router();

router.get("/crypto-info", fetchCryptoData);

export default router;
