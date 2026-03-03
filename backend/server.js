import express from "express"
import { connectDB } from "./config/db.js";

connectDB();
const app = express();

app.use("/",(req,res)=>{
    return res.send("hello");
})

app.listen(3030,function(){
    console.log(`Server is running on port ${3030}`);
})