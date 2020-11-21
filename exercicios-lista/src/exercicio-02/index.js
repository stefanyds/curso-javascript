const logger = require('../../logger');

const triangulo = (b, h, l) => {
  logger.info('Exercício 02');
  if (b === h && h === l) {
    logger.info('Triângulo Equilátero');
  } else if (b === h || b === l || h === l) {
    logger.info('Triângulo Isósceles');
  } else {
    logger.info('Triângulo Escaleno');
  }
  logger.info('----------');
};

// triangulo(2,2,2)
// triangulo(2,2,3)
// triangulo(2,3,4)
// triangulo(2,3,2)

module.exports = { triangulo };
