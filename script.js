// const http = require('http')
// const url = require('url')
import { soma, subtracao } from './test.js' 
import express from 'express'           /*Unica dferença é como o js interpreta o export e o require*/

const server = express()
const PORT = 8000

//Criar o servidor
server.get('/soma', (req , res) => {
    let resultado = soma(req.query.a , req.query.b)
    res.send(`Voce recebeu US$${resultado} (dolares) para usar na SUPERBET, fornecido pela Stake Kick Sauber F1 Team`)
})
server.get('/subtracao', (req , res) => {
    let resultado = subtracao(req.query.a , req.query.b)
    res.send(`Voce deve US$${resultado} (dolares) para SUPERBET, culpa da Stake Kick Sauber F1 Team`)
})


//Fazer ele ouvir a porta 8000
server.listen(PORT, () => {
    console.log(`Estou ouvindo na ${PORT}`)
})
