function func1(){
    return new Promise((resolve, reject) => {
        let resultado = 0
        setTimeout(() => {
            resultado = Math.floor(Math.random() * 10 )
            if(resultado > 5){
                resolve("Tudo certo ", resultado)
            }else{
                reject("Algo de errado n está certo")
            }
        }, 2000)
    })
}

async function verificaValor(){
    try{
        const resposta = await func1()
        console.log(resposta)
    }catch (e) {
        console.log(e)
    }
}