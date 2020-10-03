//Estratégia 1: Operador OR (||)
console.log('***** Estratégia #1 *****')
function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

//retorna 3
console.log(soma1())

//retorna 5
console.log(soma1(3))

//retorna 6
console.log(soma1(1,2,3))

//retorna 3, pois 0 é falso
console.log(soma1(0,0,0))

//Estratégia 2: Operador Ternário
console.log('***** Estratégia #2 *****')
function soma2(a,b,c) {
    a = (a !== undefined) ? a : 1
    b = b !== undefined ? b : 1
    c = c !== undefined ? c : 1
    return a + b + c;
}

//retorna 3
console.log(soma2())

//retorna 5
console.log(soma2(3))

//retorna 6
console.log(soma2(1,2,3))

//retorna 0, pois o 0 não é undefined apenas falso
console.log(soma2(0,0,0))

//Estratégia 3: Operador Ternário com parâmetros variáveis 
console.log('***** Estratégia #3 *****')
function soma3(a,b,c) {
    //console.log(arguments) //indice: ... , '1' : ...
    a = (0 in arguments) ? a : 1
    b = (1 in arguments) ? b : 1
    c = 2 in arguments ? c : 1
    return a + b + c
}

//retorna 3, array fica vazio
console.log(soma3())

//retorna 5
console.log(soma3(3))

//retorna 6
console.log(soma3(1,2,3))

//retorna 0
console.log(soma3(0,0,0))

//Estratégia 4: Operador Ternário com validação de tipo
console.log('***** Estratégia #4 *****')
function soma4(a,b,c) {
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}

//retorna 3
console.log(soma4())

//retorna 5
console.log(soma4(3))

//retorna 6
console.log(soma4(1,2,3))

//retorna 0
console.log(soma4(0,0,0))

//Estratégia 5: Modelo padrão ES2015
console.log('***** Estratégia #5 *****')
function soma5(a = 1, b = 1, c = 1) {
    return a + b + c
}

//retorna 3
console.log(soma5())

//retorna 5
console.log(soma5(3))

//retorna 6
console.log(soma5(1,2,3))

//retorna 0
console.log(soma5(0,0,0))