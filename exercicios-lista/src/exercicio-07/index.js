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

module.exports = { bhaskara };
