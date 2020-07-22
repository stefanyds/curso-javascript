const hero = 'Wolwerine'
const concatenacao = 'Olá ' + hero + '!'

const template = `
    Olá
    ${hero}
    !
`
console.log(template)
console.log(concatenacao)

console.log(`1 + 1 = ${1+1}`)

//Funçãoo up() recebe um texto como parâmetro e retorna texto em letras maiúsculas
const up = texto => texto.toUpperCase()
console.log(`Ei ${hero}... ${up('cuidado')}`)
