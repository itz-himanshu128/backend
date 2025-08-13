// require('dotenv').config({path: './env'})       => we can do this or 

// import mongoose from "mongoose";
// import connectDB from "./db";
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()

















/*
import express from "express"
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR: ",error);
            throw error

        })
        app.listen(process.env.PORT,()=>{
            console.log(`application is listening at ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR",error)
        throw err
        
    }
})()

*/