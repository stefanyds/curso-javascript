//Exemplo de Classe
class Pessoa {
    constructor(nome) {
        //this.nome é o que fica armazenado dentro de Pessoa
        this.nome = nome
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const Joao = new Pessoa('João')
Joao.falar()

//Exemplo factory
const criarPessoa = (nome) => {
    return { 
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

//Não precisa colocar 'new' porque foi criada uma função arrow
const Paula = criarPessoa('Paula')
Paula.falar()

//Exemplo factory
//Teve que colocar o This para poder acessar o 'falar'.
function PessoaFactory(nome) {
    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const Jose = new PessoaFactory('José')
Jose.falar()