import mongoose from "mongoose";

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