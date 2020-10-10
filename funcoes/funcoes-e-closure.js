//Closure é o escopo quando a função é declarada.
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro()
}

const minhaFuncao = fora
//Como foi declarado um x dentro de 'fora', sairá 'Local'.
console.log(minhaFuncao())