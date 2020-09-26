//Criação de forma literal
function funcao1() {}
//Undefined:
//console.log(funcao1())

//Armazenar função (anônima = ela não tem nome) em variável ou constante
const funcao2 = function() {}

//Armazenar funções em arrays
const list = [function(a,b){return a+b}, funcao1, funcao2]

console.log(list[0](2,3))

//Armazenar funções em objetos
const object1 = {}
object1.message = function() {return 'Hello World'}
console.log(object1.message())

const object2 = {
    texto: function() { return 'Hello World2'}
}
console.log(object2.texto())

//Passar função como parâmetro para outra função
function execute(props) {
    console.log('execute() ==>')
    props()
}

execute(function() {console.log('Executando...') } ) //esse é o props
execute(object1.message)

//Uma função pode retornar/conter uma outra função
function sum(a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}
//Executar de forma literal
sum(2,3)(5)

//Armazenar em uma variável e depois executar
const mySum = sum(2,3)
mySum(10)
 