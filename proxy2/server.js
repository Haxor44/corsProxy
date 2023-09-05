import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch';

const app = express()



app.use(cors())

app.get("/",async (req,res) => {
    const response = await fetch("https://service-api-0nnq.onrender.com/api/v2/services")

    res.json(await response.json())
})

app.listen(3000,() => {
    console.log("Listening on port 3000!!!")
})