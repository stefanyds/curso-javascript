/*
* Quando utilizamos operadores relacionais, o resultado sempre é 'booleano'
*/

//------------------------//
//Tipos primitivos

//Verifica se o 'valor' é 'igual' (true)
console.log('01.', '1' == 1)

//Verifica se o 'valor' e o 'tipo' são 'estritamente iguais' (false)
console.log('02.', '1' === 1)

console.log('03.', '3' != 3)
console.log('03.', '3' !== 3)

console.log('05.', 3 < 2)
console.log('06.', 3 > 2)

console.log('07.', 3 <= 2)
console.log('08.', 3 >= 2)

//------------------------//

//Tipos complexos
const d1 = new Date(0)
const d2 = new Date(0)
const d3 = d1

//verifica se são estritamente iguais
console.log('09.', d1 === d2) //eles são diferentes porque apontam para diferentes endereços de memória
console.log('10.', d1 == d2)

console.log('11.', d1 === d3)

//verificar se as 'horas' são estritamente iguais
console.log('12.', d1.getTime() == d2.getTime())

//verificar se as 'horas' são iguais
console.log('13.', d1.getTime() == d2.getTime())

//verificar se 'undefined' é igual a 'null', o valor de ambos é nulo
console.log('14.', undefined == null)

//verificar se 'undefined' é estritamente igual a 'null'
console.log('15.', undefined === null)