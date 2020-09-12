//Object é uma função
console.log(typeof Object)

//Classe é uma função
class Produto {}
console.log(typeof Produto)

//Função sem retorno:
function exibirSoma(a,b) {
    console.log(a+b)
}

//Exibir 30 no console
exibirSoma(10,20)

//Exibir um NaN
exibirSoma(10)

//Retorna 30
exibirSoma(10,20,30,40,50)

//Retorna Nan
exibirSoma()

console.log(/------------/)
/****************************************/

//Função com retorno
function soma(a=0,b=0) {
    return a + b
}

//Retorna 30 no console
console.log(soma(10,20))
console.log(soma(10))
console.log(soma())

console.log(/--------------/)
/******************************************/

//Armazenar uma função em uma variável ou constante:
const imprimirSoma = function(a,b) {
    console.log(a + b)
}
imprimirSoma(2,3)

//Armazenar uma função 'arrow' em uma variável
const somar = (a,b) => {
    return a+b
}
console.log(somar(6,3))

//Funções 'arrow' tem o retorno implícito qunado existe apenas uma linha de código
const subtracao = (a,b) => a-b
console.log(subtracao(13,3))

const imprimir = texto => console.log(texto)
imprimir('Muito legal') 