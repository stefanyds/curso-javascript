//Delta: toda vez que você acelerar, acelera 5km/h
/**
 * Função construtora
 * Cria um objeto do tipo Carro
 * @param {number} velocidadeMaxima 
 * @param {number} delta 
 */
function Carro(velocidadeMaxima = 200, delta = 5) {
    //Atributoo privado
    let velocidadeAtual = 0
    
    //Método público 
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual+=delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

//Objeto criado a partir da função construtora
//É obrigatório o uso do New para criar um novo objeto como o Carro
const uno = new Carro()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

//Objeto criado a partir da função construtora
const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

//Analisando o tipo da função construtora
console.log(typeof Carro)

//Analisando o tipo do objeto 'ferrari'
console.log(typeof ferrari)
console.log(ferrari)

//Essa função construtora cria somente objetos.