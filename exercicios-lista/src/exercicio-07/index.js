const bhaskara = (ax2, bx, c) => {
  const delta = bx ** 2 - 4 * ax2 * c;
  // let raizes = []
  if (delta < 0) {
    return 'Delta é negativo';
    // ou
    // return raizes.push('Delta é negativo)
  }

  const raizes = [
    (-bx + delta ** 0.5) / (2 * ax2),
    (-bx - delta ** 0.5) / (2 * ax2),
  ];
  return raizes;
};

const bhaskaraCalcular = () => {
  console.log('Exercício 07');
  console.log(bhaskara(1, 3, 2));
  console.log(bhaskara(3, 1, 2));
  console.log(bhaskara(3, 5, -5));
  console.log('----------');
};

module.exports = { bhaskaraCalcular };