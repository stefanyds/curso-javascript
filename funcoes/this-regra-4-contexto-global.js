global.playerName = 'Batman'

//dentro da função o this === global (ou window)
const sayGlobalName = function() {
    console.log(this.playerName)
}

sayGlobalName()
//fora da função (nodejs). this === module.exports
console.log(this)

//no navegador é só colocar 'window' no lugar de 'global' (window.playerName)

