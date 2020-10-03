/**
 * Regra 2: Usando 'bind', 'apply' e 'call' o valor de 'this' dentro da função é explicitamente setado no primeiro argumento (de bind, apply ou call)
 */

const player = {
    name: 'Hermes',
}

const enemy = {
    name: 'Prometheus',
}

const sayName = function() {
    console.log(this.name)
}

//Usando 'bind' para criar novas funções que fazem a mesma coisa da função 'sayName', mas definindo o 'this' manualmente.
//fazendo com que o this entenda que é para olhar para player
const sayPlayerName = sayName.bind(player)
//fazendo com que o this entenda que é para olhar para enemy
const sayEnemyName = sayName.bind(enemy)

sayPlayerName() //Hermes
sayEnemyName() //Prometheus
sayName.bind(enemy)() 