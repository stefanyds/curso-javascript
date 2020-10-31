const triangulo = (b,h,l) => {
    if( b == h && h == l) {
        console.log('Triângulo Equilátero')
    } else if (b == h || b == l || h == l) {
        console.log('Triângulo Isósceles')
    } else {
        console.log('Triângulo Escaleno')
    }
}

triangulo(2,2,2)
triangulo(2,2,3)
triangulo(2,3,4)
triangulo(2,3,2)