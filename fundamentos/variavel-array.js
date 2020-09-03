//Criação de forma literal
const notas = [7.7, 8.9, 6.5, 9.8]

//Acessando valores por índices
console.log(notas[0], notas[3])

//Acessando índices que não existem
console.log(notas[4])

//Criar conteúdo no índice 4
notas[4] = 8.5
console.log(notas)

//Criar índices em qualquer posição
notas[10] = 7.0
console.log(notas)

//Verificar quantidade de itens
console.log('qtd.itens = ', notas.length)

//Arrays são heterogêneos 
notas.push({})
notas.push({código: 0, nome: 'Beltrano'})
console.log(notas)

//Capturar e emover o último elemento do array
let objeto = notas.pop()
console.log('objeto = ', objeto)
console.log(notas)

//Remover o último elemento
delete notas[11]
console.log(notas)

//Arrays em JavaScript são do tipo 'Object' (objeto)
console.log(typeof notas)