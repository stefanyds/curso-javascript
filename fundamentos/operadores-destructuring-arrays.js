const [a] = [10]
console.log(a)

const [a1, a2, a3, a4] = [10, 7, 9, 8]
console.log(a1, a2, a3, a4)

//b1 = 10
//b2 = ignorado
//b3 = 9
//b5 = undefined
//b6 = 0
const [b1, , b3, , b5, b6 = 0] = [10, 7, 9, 8]
console.log(b1, b3, b5, b6)

//array multidimensional
//array1 = ignorado
//array2 
//  ignora 1o. elemento
//  extrai 2o. elemento = 5
const [, [, nota]] = [ [1, 2, 3], [4, 5, 6]]
console.log(nota)