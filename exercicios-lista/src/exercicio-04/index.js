const logger = require('../../logger');

const divisao = (a, b) => {
  logger.info('Exercício 04');
  const result = a / b;
  const resto = a % b;
  logger.info(`Resultado: ${result}, Resto: ${resto}`);
  logger.info('----------');
};

module.exports = { divisao };
// divisao(3,2)
