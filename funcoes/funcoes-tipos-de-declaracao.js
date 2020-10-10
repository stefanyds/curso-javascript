console.log(soma(3,6))
//A function declaration você pode chamar antes da declaração da função.
//Com a function expression e a named expression, você não consegue chamar a função antes de ela ser declarada.

//Function declaration
function soma(x,y) {
    return x + y
}

//Function expression
const sub = function(x,y) {
    return x - y
}
console.log(sub(9,6))

//Function named expression
const multi = function multiply(x, y) {
    return x * y
}
console.log(multi(3,6))
