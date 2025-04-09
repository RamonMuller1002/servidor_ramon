function sexo() {
    console.log("Não goza ainda")

    // a function é chamada de função anônima, podendo ser usada como function, ou arrow function.
    //setTimeout(function() {console.log('gozei')}, 5000)
    setTimeout(() => { console.log('Vou gozar!!!') }, 5000)
    setTimeout(() => { console.log('Gozei') }, 2000)
}


function pedirPizza(sabor, callback){
    console.log(`Produzindo pizza sabor ${sabor}`)
    setTimeout(
        ()=>{
            console.log(`enviando`)
            callback('queijo')
        }, 5000 , sabor
    )
}

function comerPizza(sabor){
    console.log(`Comendo a pizza de ${sabor}`)
}

pedirPizza('Mussarela', comerPizza)