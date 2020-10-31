const calcular = (b,e) => {
    return (b**e)
    // antigo: math.pow(b,e)
}

// console.log(calcular(2,1))
// console.log(calcular(3,2))
// console.log(calcular(2,3))

const calcular3 = () => {
    console.log('Exercício 03')
    console.log(calcular(2,1))
    console.log(calcular(3,2))
    console.log(calcular(2,3))
    console.log('----------')
}

module.exports = {calcular3}