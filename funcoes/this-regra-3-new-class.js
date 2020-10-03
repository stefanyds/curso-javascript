//Usando 'class' o 'new' chama o 'constructor' e faz a mesma coisa com o 'this'
class Player {
    constructor(name) {
        //const this = {}
        this.name = name
        this.hp = 1000
        this.mp = 0
        //return this
    }
}

const cloud = new Player('Cloud')
console.log(cloud.name, cloud.hp, cloud.mp)