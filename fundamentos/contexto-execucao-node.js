let a = 3

//Prática não recomendada!
global.b = 123

//module.exports é um objeto
//vai para o module.exports
this.c = 456
console.log(this.a) //undefined
console.log(global.b)
console.log(this.c)

console.log(this === global)
console.log(this === module.exports)

// module.exports = { 
//     a, b, c, myFunc, myObject
// }