const http = require('http')
const { ferrari } = require('./test')
const PORT = 8000

//Criar o servidor
const server = http.createServer((req, res) => {
    
    let valores = req.url
    .replace('/', '')
    .replace('?', '')
    .split('&')
    
    let parametros = {}
    for (item in valores){
        let chaveValor = valores[item].split('=')
        parametros[chaveValor[0]] = Number(chaveValor[1])
    }
    console.log(parametros)
    let resultado = ferrari(parametros.a, parametros.b, parametros.c)
    
    res.end(`Voce ganhou US$${resultado}(dolares) para usar na SuperBET fonecidos pela Ferrari`)
})
//Fazer ele ouvir a porta 8000
server.listen(PORT, () => {
    console.log(`Estou ouvindo na ${PORT}`)
})
