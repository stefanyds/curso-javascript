const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//Sem callback
let notasBaixas1 = []
for (let i in notas){
    if( notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Filter vai alimentando um array novo, de acordo com true or false.
//Com callback
//Se o resultado da função callback for verdadeiro, os itens válidos serão filtrados criando um novo array resultante.

const notasBaixas2 = notas.filter(function(item){
    return item < 7
})
console.log(notasBaixas2)

//Versão mais resumida
const notasBaixas3 = notas.filter((item) => item < 7)
console.log(notasBaixas3)