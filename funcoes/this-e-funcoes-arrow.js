const player = {
    name: 'Musashi',
    weapon: 'Katana Sword',
    sayNameAndAttack() {
        console.log(this.name)
        //se colocar como uma função normal, vai dar erro. Pois ele não consegue identificar o 'this'
        //arrow function:
        global.setTimeout(() => {
            console.log(`${this.name} ataca com ${this.weapon}!`)
        }, 5000);
    }
}

player.sayNameAndAttack()