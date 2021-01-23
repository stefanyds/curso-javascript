const produto = new Object();
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;
console.log(produto);

delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

//--------------------

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 369,
    },
  },
  condutores: [
    {
      nome: 'Junior',
      idade: 19,
    },
    {
      nome: 'Ana',
      idade: 36,
    },
  ],
  calcularValorDoSeguro: function () {
    console.log('Valor do seguro: R$1250,00');
  },
};
console.log(carro);
carro.calcularValorDoSeguro();

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorDoSeguro;
console.log(carro);

//NÃO GERA ERRO
console.log(carro.condutores);

//GERA ERRO (porque o condutores não existe)
//TypeError: Cannot read property 'length' of undefined
console.log(carro.condutores.length);
