const valor = 'Global'

function myFunction() {
    console.log(valor)
}

myFunction()

function exec() {
    const valor = 'Local'
    myFunction()
}

//Vai imprimir Global porque no começo foi 'amarrado' esse valor ou myFunction().
exec()