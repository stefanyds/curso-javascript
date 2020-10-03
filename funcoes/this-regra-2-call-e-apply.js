const player = {
    name: 'Leonidas de Esparta',
    hp: 100,
    mp: 0,
    printStatus() {
        console.log(`${this.name} tem ${this.hp} de HP e ${this.mp} de MP.`)
    }
}

const addHPMPToPlayer = function(hp,mp) {
    this.hp += hp
    this.mp += mp
    this.printStatus()
}

player.printStatus()

//call e apply fazem a mesma coisa, só muda a maneira de passar os parâmetros.

//Leonidas terá 150 hp e 20 mp
//setando o 'this' manualmente usando 'call' 
addHPMPToPlayer.call(player, 50, 20)

//setando o 'this' manualmente usando 'apply'
addHPMPToPlayer.apply(player, [50,20])


