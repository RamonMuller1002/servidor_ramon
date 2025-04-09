function ligarFogao() {
    return new Promise((resolve, reject) => {
        console.log(`Ligando Fogão`)
        setTimeout(resolve, 1000)
    })

}
function ferverAgua() {
    return new Promise((resolve, reject) => {
        console.log(`Fervendo agua`)
        setTimeout(resolve, 2000)
    })
}
function colocarMacarrao() {
    return new Promise((resolve, reject) => {
        console.log(`Colocar macarrao`)
        setTimeout(resolve, 3000)
    })
}
function escorrer() {
    return new Promise((resolve, reject) => {
        console.log(`Servindo`)
        setTimeout(resolve, 4000)
    })
}
function servir() {
    setTimeout(() => { console.log(`Servindo a mesa`) }, 5000)
}

ligarFogao()
    .then(() => ferverAgua())
    .then(() => colocarMacarrao())
    .then(() => escorrer())
    .then(() => servir())
    .then(() => console.log('Processo completo'))
    .catch((erro) => console.log(erro))