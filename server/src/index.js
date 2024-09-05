import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const app = express();
import { announcementRoutes } from "./routes/announcements.js";
import { quizRoutes } from "./routes/quizzes.js";
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
// mongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use("/api/announcements", announcementRoutes);
app.use("/api/quizzes", quizRoutes);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
