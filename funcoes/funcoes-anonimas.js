/**
 * Funções anônimas não possuem nome após a cláusula 'function'
 * 1. São atribuidas a variáveis ou constantes
 * 2. São passadas como parâmetro para funções
 * 3. São passadas como retorno de funções
 * 4. Podem ser declaradas com ou sem a palavra reservada 'function' dentro de objetos
 */

 /**
  * Soma dois números
  * @param {number} x 
  * @param {number} y 
  */
 const sum = function(x,y) {
     return x + y
 }

/**
 * Recebe dois números e uma função para executar posteriormente.
 * @param {number} a 
 * @param {number} b 
 * @param {function} functionOperation 
 */
const printResult = function(a,b,functionOperation = sum ){
     console.log(functionOperation(a,b))     
}
 
//Quando você chama uma função sem os '()', está sendo passada a informação dela e não a execução.

printResult(3,6)
printResult(6,9, sum)
printResult(6,9, function (x,y) {
    return x-y
})

printResult(6,9,(x,y) => x * y)

//Objeto contendo dois tipos de declaração de funções anônimas
//Quando estamos dentro de objetos, não é necessário escrever 'function'
const people = {
    speak: function() {
        console.log('Hello World!')
    },
    talk() {
        console.log('Hello World again!')
    }
}

people.speak()
people.talk()
