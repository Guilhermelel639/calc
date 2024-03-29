import express from "express";
import cors from "cors"
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let lista = [22,13,2e+35]

app.get("/todos", (req, res)=>{
    return res.status(200).json(lista)
})

app.post("/novo", (req, res)=>{
    const {resultado} = req.body
    lista.push(parseFloat(resultado));
})
app.delete("/apagar", ()=>{
    lista = []
})

app.listen(3000, ()=>{
    console.log("api no ar!")
})