const JurosSimples = (capitalInicial, taxa, tempo) => {
    let JurosSimples = capitalInicial + capitalInicial * taxa * tempo 
    return JurosSimples
}
const JurosCompostos = (capitalInicial, taxa, tempo) => {
    let JurosCompostos = capitalInicial * (1 + taxa)**tempo
    return JurosCompostos.toFixed(2)
}

console.log(JurosSimples(100, 10/100, 16))
console.log(JurosCompostos(100,10/100,16))