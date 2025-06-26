import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { bookRouter } from "./routes/dataRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: process.env.FRONT_END_URL }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Book catalog");
});
app.use("/api", bookRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
