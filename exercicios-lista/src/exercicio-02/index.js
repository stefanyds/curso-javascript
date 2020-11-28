const vallados = (l1, l2, l3) => {
  if (l1 === l2 && l1 === l3) {
    return 'Equilátero';
  }
  if (l1 === l2 || l1 === l3 || l2 === l3) {
    return 'Isosceles';
  }
  return 'Escaleno';
};

module.exports = { vallados };
