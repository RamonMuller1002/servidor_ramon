function ligarFogao() {
    return new Promise((resolve, reject) => {
        resolve(`Ligando Fogão`)
        setTimeout(resolve, 1000)
    })

}
function ferverAgua() {
    return new Promise((resolve, reject) => {
        resolve(`Fervendo agua`)
        setTimeout(resolve, 2000)
    })
}
function colocarMacarrao() {
    return new Promise((resolve, reject) => {
        resolve(`Colocar macarrao`)
        setTimeout(resolve, 3000)
    })
}
function escorrer() {
    return new Promise((resolve, reject) => {
        resolve(`Escorrendo macarrão`)
        setTimeout(resolve, 4000)
    })
}
function servir() {
    setTimeout(() => { console.log(`Servindo a mesa`) }, 5000)
}

async function verificaEtapas() {
    const etapa1 = await ligarFogao()
    console.log(etapa1);
    const etapa2 = await ferverAgua()
    console.log(etapa2);
    const etapa3 = await colocarMacarrao()
    console.log(etapa3);
    const etapa4 = await escorrer()
    console.log(etapa4);
    const etapa5 = await servir()
    console.log(etapa5)
}
verificaEtapas()