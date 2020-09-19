function rand([min = 0, max = 1000]) {
    if (min > max) {
        [min, max] = [max, min]
    }
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

//o min sempre vai ser o que está nas primeiras posições (menores posiçõoes)
const array1 = [50, 40]
console.log(rand(array1))

//passando array apenas com 'min'
console.log(rand([955]))

//passando apenas o 'max'
console.log(rand([, 10]))

//passando array vazio
console.log(rand([]))

//sem passar array (TypeError)
console.log(rand())