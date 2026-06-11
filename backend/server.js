import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();

//Configurations
dotenv.config();
connectDB();

//?Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "https://mern-blog-app-beta-one.vercel.app",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

//!Routes
app.use("/auth", userRoutes);
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("API Is Running");
});

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`Server started at ${process.env.PORT}`);
});
