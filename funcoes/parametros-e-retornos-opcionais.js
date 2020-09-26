function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
      console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
      return area
    }
  }

  //4
console.log(area(2, 2))

//NaN
console.log(area(2))

//NaN
console.log(area())

//6
console.log(area(2, 3, 15, 20, 50))

//undefined
console.log(area(5, 5))