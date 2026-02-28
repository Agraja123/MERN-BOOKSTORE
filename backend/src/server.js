import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes.js"
import { connectDB } from "./config/db.js";
import cors from "cors";

import n from "node:dns/promises"
n.setServers(["1.1.1.1", "8.8.8.8"]);


dotenv.config()
const app=express();
const port=process.env.PORT || 3000
//app.get('/',(req,res)=>{
    //res.status(200).json("Hello")
    //console.log('Hello')
//})
//app.listen(port,() =>{
    //console.log(`http://localhost:${port}`)
//})
app.use(cors(
    {
        // origin: 'http://localhost:5173'
    }
))
app.use(express.json())
app.use("/books", bookRoutes)

connectDB().then(()=>{
    app.listen(port, () =>{
        console.log(`http://localhost:${port}/books`)
    })
})

