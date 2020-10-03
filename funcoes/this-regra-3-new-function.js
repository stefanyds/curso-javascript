//As linhas comentadas demonstram o que 'new' faz:

const Player = function(name){
    //const this = {}
    this.name = name
    this.hp = 1000
    this.mp = 0
    //return this
}

const cloud = new Player('Cloud')

console.log(cloud.name, cloud.hp, cloud.mp)
