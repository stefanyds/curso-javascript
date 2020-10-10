//Funções Arrow são sempre funções anônimas 

//Função anônima trivial
let dobro = function (a) {
    return 2*a
}

let ola = function() {
    return 'Olá'
}

//Função arrow
dobro = (a) => {
    return 2 * a
}

//Na função arrow de uma linha o 'return' é implicito, se tiver mais que uma linha: colocar o return.
ola = () => 'Olá'

//Nessa função, o this está fixado, não da de ficar manipulando ele.

