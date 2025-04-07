/*Unica dferença é como o js interpreta o export e o require. exemplo de como se pode usar:

import express from 'express'

*/
// const http = require('http')
// const url = require('url')


import { soma, subtracao } from './test.js';

import express from 'express'   
import conversoes  from 'conversoes-ramon-3b-rm'   


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
server.get('/conversoes', (req, res) => {
    let resuldado = conversoes(req.query.unidade, req.query.qtd)
    res.send(`O resultado é ${resuldado}`)
})


//Fazer ele ouvir a porta 8000
server.listen(PORT, () => {
    console.log(`Estou ouvindo na ${PORT}`)
})
