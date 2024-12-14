import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router } from "./routes";

import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/api/", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("App running");
});
