import express from 'express'
import 'dotenv/config'

const app = express();

app.get("/api", (req, res) => {
   res.json({"users":["guest","user","admin","sysAdmin"]})
})


const port = process.env.PORT
app.listen(port, () =>{
   console.log("App running on : "+ port)
})