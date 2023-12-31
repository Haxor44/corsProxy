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
app.get("/users",async (req,res) => {
    const response = await fetch("https://https://emps-hstg.onrender.com/api/v1/users/users")
    res.json(await response.json())
})

app.get("/getUser/:id",async (req,res) => {
    const response = await fetch(`https://https://emps-hstg.onrender.com/api/v1/users/users/${req.id}`)
    res.json(await response.json())
})

app.post("/addUser",async (req,res) => {
    const response = await fetch("https://https://emps-hstg.onrender.com/api/v1/users/addUSer")
    res.json(await response.json())
})

app.put("/editUser/:id",async (req,res) => {
    const response = await fetch(`https://https://emps-hstg.onrender.com/api/v1/users/users/${req.id}`)
    res.json(await response.json())
})

app.listen(PORT,() => {
    console.log("Listening on port 3000!!!")
})