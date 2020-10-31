function formatarValorDecimal(a){
    //toFixed(2) duas casas decimais
    //toString e replace para poder mudar . - > ,
    console.log('Exercício 05')
    let valorEmReais = `R$ ${a.toFixed(2).toString().replace("." , ",")}`
    console.log(valorEmReais)
    console.log('----------')
}

module.exports = { formatarValorDecimal }
//formatarValorDecimal(0.1+0.2)