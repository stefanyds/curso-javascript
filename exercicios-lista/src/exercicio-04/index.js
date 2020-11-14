const divisao = (a, b) => {
  console.log('Exercício 04');
  const result = a / b;
  const resto = a % b;
  console.log(`Resultado: ${result}, Resto: ${resto}`);
  console.log('----------');
};

module.exports = { divisao };
// divisao(3,2)
