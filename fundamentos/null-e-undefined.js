//Atribuição por referência
console.log('Atribuição por Referência #01')
console.log('--------------------------')
const produtoA = {descricao: 'Curso JavaScript 2020'}
console.log('ProdutoA = ', produtoA)
produtoB = produtoA
console.log('ProdutoB = ', produtoB)
produtoB.descricao = 'Curso Desenvolvimento Mobile 2021'
console.log('ProdutoA = ', produtoA)
console.log('ProdutoB = ', produtoB)
console.log('')

console.log('Atribuição por Referência #02')
console.log('--------------------------')
let array1 = [1, 2, 3]
console.log('array1= ', array1)
let array2 = array1
console.log('array1= ', array1)
console.log('array2= ', array2)
array2.push(4)
console.log('array1= ', array1)
console.log('array2= ', array2)
array1.push(5)
console.log('array1= ', array1)
console.log('array2= ', array2)

//Atribuição por valor
console.log('Atribuição por Valor')
console.log('--------------------------')
let bool1 = true;
let bool2 = bool1;
console.log(bool1, bool2)
bool1 = false //tipos simples de dados
console.log(bool1, bool2)
console.log('')

console.log('Valores undefined e null')
console.log('--------------------------')
let preco
console.log(preco)

preco = null
console.log(preco)
//Uma variável que é nula não pode acessar valor.
//console.log(preco.toString())

const produto = {}
console.log(produto)
console.log(produto.preco)
produto.preco = 5.99
