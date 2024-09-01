import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Define your routes here

export default app;
