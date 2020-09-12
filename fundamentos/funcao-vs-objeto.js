//Tipo objeto é uma função
console.log(typeof Object)

//Um 'novo objeto' é um 'object'
console.log(typeof new Object)
console.log(typeof new Object ())

//Criando objeto a partir de uma função
const Usuario = function() {}
console.log(typeof Usuario)
console.log(typeof new Usuario)
console.log(typeof new Usuario())

//Uma 'classe' é essencialmente uma função
//A 'classe' é um 'atalho' de sintaxe para uma função

class Cliente {} //mesma coisa que const Cliente = function () {}
console.log(typeof Cliente)
console.log(typeof new Cliente)
console.log(typeof new Cliente())

const cliente2 = {
    nome: 'Julio',
    endereco: {
        logradouro: 'Rua ABC',
        numero: 3
    }
}