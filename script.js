const http = require('http')
const url = require('url')
const { ferrari } = require('./test')
const PORT = 8000

//Criar o servidor
const server = http.createServer((req, res) => {
    
    const urlCapturada = url.parse(req.url, true)
    const { query } = urlCapturada
    let resultado = ferrari(Number(query.a), Number(query.b), Number(query.c))
    
    res.end(`Voce ganhou US$${resultado}(dolares) para usar na SuperBET fonecidos pela Ferrari`)
})
//Fazer ele ouvir a porta 8000
server.listen(PORT, () => {
    console.log(`Estou ouvindo na ${PORT}`)
})
