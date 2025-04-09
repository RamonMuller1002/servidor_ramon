function funcao1() {
    return new Promise((resolve, reject) => {
        //Executar minha função assincrona
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 10)
            // se der certo finalizo com resolve
            //Se der errado, finalizo com reject
            if (numero > 5) {
                resolve('deu tudo certo')
            } else {
                reject('deu tudo errado')
            }
        }, 3000)

    })
}

const variavel = funcao1()
variavel.then(
    (msg) => {
        console.log(msg)
    }
).catch(
    (erro) => {
        console.log(erro)
    }
)