//Tipos em JavaScript: String
const escola = 'ProgrammerHero'
console.log(escola.charAt(4)) //Retorna a 4a. letra a partir do zero
console.log(escola.charAt(20)) //Retorna valor 'vazio' mas não retorna erro
console.log(escola.charCodeAt(4)) //Valor da tabela UNICODE
console.log(escola.indexOf('H')) //Índice da letra
console.log(escola.substring(10)) //Retorna o que está a partir dessa posição
console.log(escola.substring(0, 10)) //Começa no 0 e vai até a posição 10

console.log('Escola '.concat(escola).concat('!')) //Concatenação
console.log(`Escola ${escola}!`)
console.log('Escola ' + escola + '!')

console.log(escola.replace('m','M')) //Substitua a letra m por M
console.log(escola.replace('mm','MM'))
console.log(escola.replace('r', 'R'))
console.log(escola.replace(/\P/,'*')) //Substitui o P por *
console.log(escola.replace(/\w/g,'*')) //Subititui tudo por *

console.log('Marlo, Aldo, Stefany'.split(',')) //Tudo que estiver entre vírgulas vai ser um item do array
console.log('3' + 2) //Resultado é 32. A string em cenários de soma, sempre ganha.



