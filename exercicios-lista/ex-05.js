function formatarValorDecimal(a){
    //toFixed(2) duas casas decimais
    //toString e replace para poder mudar . - > ,
    let valorEmReais = `R$ ${a.toFixed(2).toString().replace("." , ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1+0.2)