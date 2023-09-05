import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch';
const PORT = process.env.PORT || 8081;
const app = express()



app.use(cors())

app.get("/",async (req,res) => {
    const response = await fetch("https://service-api-0nnq.onrender.com/api/v2/services")

    res.json(await response.json())
})

app.listen(PORT,() => {
    console.log("Listening on port 3000!!!")
})