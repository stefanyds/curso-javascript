//Number: alguns cuidados
console.log(7/0) //Infinity - seria um valor que tende ao infinito... muito pequeno
console.log(7/0.0001)
console.log(7/0.0000000000000001)
console.log("10"/2) //Funciona - resultado = 5
console.log("Show" * 2 ) // NaN
console.log(0.1 + 0.7) 

//Cuidado!!!
console.log(10.toString() //Não funciona)
console.log((10.345).toFixed(2))

/*
Resumindo:
-cuidado com tipos String
-cuidado com NaN
-cuidado com imprecisões
*/
