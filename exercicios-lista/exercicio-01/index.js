// function Ope(a,b){
//     console.log(a+b,a-b,a*b,a/b)
// }

//Execução
//Ope(4,2)

//Função Arrow
const calcular = (a,b) => {
    console.log('Exercício 01')
    console.log(`Soma = ${a+b} 
Subtração = ${a-b}
Multiplicação = ${a*b}`)
    console.log('----------')
}

//Execução
//calcular(5,5)

//quem importar o arquivo, pode usar:
module.exports = {calcular}