//NOTAÇÃO LITERAL
const obj1 = {
  nome: 'José',
};
console.log(obj1);

//OBJETO EM JS
//NECESSÁRIO USAR A NOTAÇÃO PONTO PARA CRIAR OS ATRIBUTOS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
obj2.nome = 'João';
console.log(obj2);

//FUNÇÕES CONSTRUTORAS
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 3500.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//FUNÇÃO FACTORY (tem que retornar um objeto)
function criarFuncionario(nome, salario, faltas) {
  return {
    nome,
    salarioBase: salario,
    faltas,
    getSalario() {
      return (this.salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());
console.log(f1);

//Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

//OBJETO A PARTIR DE UM JSON
//OS ATRIBUTOS DEVEM ESTAR ENTRE ""
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
console.log(fromJSON);
