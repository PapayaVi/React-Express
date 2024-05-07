// import express from 'express'
const express = require('express')
require('dotenv').config()
// import 'dotenv/config'

const app = express();

app.use("/", (req, res) => {
   res.send("Server deployed")
   console.log("Hello")
})

app.get("/api", (req, res) => {
   res.json({"users":["guest","user","admin","sysAdmin"]})
})


const port = process.env.PORT
app.listen(8080, () =>{
   console.log("App running on : "+ port)
})