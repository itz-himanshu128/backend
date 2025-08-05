require('dotenv').config()
const express = require ('express')
// import express from "express"
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("hello user ")
})

app.get('/twitter',(req,res)=>{
    res.send('twitter_handel')
})

app.get('/facebook',(req,res)=>{
    res.send('facebook_handel')
})
app.listen(process.env.PORT,()=>{
    console.log(`port is listening at ${3000}`)
})