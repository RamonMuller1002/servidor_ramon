function ligarFogao(callback){
    console.log(`Ligando Fogão`)
    setTimeout(callback, 1000)
}
function ferverAgua(callback){
    console.log(`Fervendo a água`)
    setTimeout(callback, 2000)
}
function colocarMacarrao(callback){
    console.log(`Colocando macarrão`)
    setTimeout(callback, 3000)
}
function escorrer(callback){
    console.log(`Escorrendo macarrão`)
    setTimeout(callback, 4000)
}
function servir(){
    setTimeout(()=>{console.log(`Servindo a mesa`)}, 5000)
}

ligarFogao(()=>{
    ferverAgua(()=>{
        colocarMacarrao(()=>{
            escorrer(()=>{
                servir()
            })
        })
    })
})