const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua dos Heróis',
        numero: 369
    }
}

//Desestruturar:
const { nome, idade} = pessoa
console.log(nome, idade)

const {sobrenome = 'Silva', bemHumorada= true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//Cuidado!
//Desestruturar objetos complexos inexistentes geram erro
const {conta: {ag, num}} = pessoa
console.log(ag,num)