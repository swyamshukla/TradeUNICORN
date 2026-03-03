import dotenv from 'dotenv'
dotenv.config();
import cors from "cors";
import express from "express"
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import { router as authRoutes } from './routes/authRoutes.js';

connectDB();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());


app.use("/api/auth", authRoutes);


app.listen(3030,function(){
    console.log(`Server is running on port ${3030}`);
})