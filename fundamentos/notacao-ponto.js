//Acessar funções e objetos através do ponto (.)

//Arredonda para cima
console.log(Math.ceil(6.1))
//Arredonda para baixo
console.log(Math.floor(6.1))

//Criamos atributos em objetos com a notação ponto
const obj1 = {}
obj1.nome = 'triângulo'
console.log(obj1)

function Obj(nome) {
    //criando um atributo 'nome' (público) que recebe o valor do parâmetro 'nome'
    this.nome = nome //o primeiro nome é o atributo do Obj, o segundo é o parâmetro que foi passado
}
console.log(new Obj('Teste')) //Por causa do this, é necessário colocar o new, pois o this transforma em objeto

const obj2 = new Obj('Notebook')
const obj3 = new Obj('Celular')
console.log(obj2)
console.log(obj3)
console.log(obj2.nome)
console.log(obj3.nome)