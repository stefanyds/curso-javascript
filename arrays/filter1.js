//o map percorre o array e retorna um array com o mesmo tamanho
//o filter cria um array menor a partir do array passado, filtrando o mesmo
//filtra com uma expressão bouleana
const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.5, fragil: true },
  { nome: 'Copo de Plásticoo', preco: 10.5, fragil: false },
];

let filtroFalse = produtos.filter((e) => {
  return false;
});

let filtroTrue = produtos.filter((e) => {
  return true;
});

// console.log(filtroFalse);
// console.log(filtroTrue);

//Produtos caros e frágeis
const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;
const naofragil = (produto) => !produto.fragil;

let produtosCarosEFrageis = produtos.filter(caro).filter(fragil);
let produtosFrageis = produtos.filter(fragil);
let produtosNaoFrageis = produtos.filter(naofragil);

console.log(produtosCarosEFrageis);
console.log(produtosFrageis);
console.log(produtosNaoFrageis);
