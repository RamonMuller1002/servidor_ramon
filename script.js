const http = require('http')
const url = require('url')
const { soma , subtracao } = require('./test')
const PORT = 8000

//Criar o servidor
const server = http.createServer((req, res) => {
    
    const urlCapturada = url.parse(req.url, true)
    const { query , pathname } = urlCapturada
    if(pathname == '/soma'){
        let resultado = soma(Number(query.a), Number(query.b))
        res.end(`Voce ganhou US$${resultado}(dolares) para usar na SuperBET fonecidos pela Ferrari`)
    }else if(pathname == '/subtracao'){
        let resultado = subtracao(Number(query.a), Number(query.b))
        res.end(`Voce está devendo US$${resultado}(dolares) para SuperBET, culpa da Ferrari`)
    }else{
        res.statusCode = 404;
        res.end(`Erro 404: Pagina não encontrada`)
    }
})
//Fazer ele ouvir a porta 8000
server.listen(PORT, () => {
    console.log(`Estou ouvindo na ${PORT}`)
})
