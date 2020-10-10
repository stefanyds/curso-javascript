//A função callback só é chamada quando for disparada, sem o seu controle,
//Lista de fabricantes
const manufacturers = ['Mercedes', 'Audi', 'BMW']

function print(name, index) {
    console.log(`${index+1}. ${name}`)
}

//Ela está percorrendo cada valor da lista e chamando a função.
//Utilizando a função 'print' como parâmetro 'callback' da função 'forEach'.
manufacturers.forEach(print)

manufacturers.forEach(function(name) {
    console.log(name)
})

manufacturers.forEach((name) => console.log(name))
