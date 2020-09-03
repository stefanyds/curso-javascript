let isAtivo = false
console.log('isAtivo = ', isAtivo)

isAtivo = true
console.log('isAtivo = ', isAtivo)

isAtivo = true
console.log('isAtivo = ', !isAtivo)
//Agora começa o interessante
//Exibe o valor numérico de 'isAtivo'
isAtivo = 1
console.log('isAtivo = ', isAtivo)

//Exibe o valor booleano de 'isAtivo'
isAtivo = 1
console.log('isAtivo = ', !!isAtivo)

console.log('... Valores Verdadeiros ...')
//Números inteiros (positivos e negativos, menos o zero)!
console.log(!!3)
console.log(!!-1)

//Strings, não vazias, com no mínimo um espaço em branco
console.log(!!' ')
console.log(!!'texto')

//Listas (vazias ou com valor)
console.log(!![])
console.log(!!['arroz', 'feijão', 'café'])

//Objetos (vazios ou com conteúdo)
console.log(!!{})
console.log(!!{nome:'Fulano', sobrenome: 'da Silva'})

//Tipo Infinity (infinito)
console.log(!!Infinity)

//Valores 'verdadeiros' atribuídos a variáveis.
//Não confudir com o resultado da operação, mas sim se o valor é verdadeiro.
console.log(!!(isAtivo = true))

console.log('... Valores Falsos ...')
//Zero
console.log(!!0)

//Strings vazias
console.log(!!'')

//Valores nulos
console.log(!!null)

//Valores não numéricos
console.log(!!NaN)

//Valores undefinded (indefinidos)
console.log(!!undefined)

//Valores falsos atribuídos a variáveis
console.log(!!(isAtivo = false))

/*-------------------------------------------*/

console.log('... Expressões booleanas ...')

console.log('... Operador OU ...')
//Se um dos valores for 'verdadeiro', o resultado é verdadeiro
console.log(!!('' || null || 0 || ' '))

//A expressão OU retorna sempre o 'primeiro valor' verdadeiro.
//Vamos tirar a dupl negação para conferir
console.log(('' || null || 0 || 'Teste'))
console.log(('' || null || 0 || 'Teste' || 123))
console.log(('' || null || 0 || '' || 123))

//Operador OR na prática:
let nome = ''
console.log(nome || 'Nome Desconhecido')

console.log('... Operador AND ...')
//Operador AND. Se todos os valores forem 'verdadeiros', o resultado é verdadeiro.
console.log(!!('Teste' && [] && {} && -1 && Infinity))

//A expressão AND sempre retorna o último valor verdadeiro.
console.log(('Teste' && [] && {} && -1 && Infinity))

//Operador AND na prática:
let link = '#inicio'
link && console.log('Expressão a executar') //Se for verdadeiro link, irá executar o que vem depois

