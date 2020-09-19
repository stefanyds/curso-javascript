const obj = {max: 50, min: 40}

//função utilizada para criar os números da megasena
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//funcao um objeto completo 
console.log(rand(obj))

//funcao com apenas 'min'
console.log(rand({min: 955}))

//funcao com objeto vazio
console.log(rand({}))