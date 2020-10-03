function soma() {
    let somatorio = 0
    //console.log(arguments)
    for (let i in arguments){
        somatorio += arguments[i]
    }
    return somatorio
}

//retorna zero
console.log(soma())

//retorna 1
console.log(soma(1))

//retorna 6.6
console.log(soma(1.1,2.2,3.3))

//concatena o 'Teste': 3.30000000000003Teste
console.log(soma(1.1,2.2,'Teste'))

//retorna 0abc
console.log(soma('a','b','c'))