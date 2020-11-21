const logger = require('../../logger');

const calcular = (b, e) => b ** e;
// antigo: math.pow(b,e)

// logger.info(calcular(2,1))
// logger.info(calcular(3,2))
// logger.info(calcular(2,3))

const calcular3 = () => {
  logger.info('Exercício 03');
  logger.info(calcular(2, 1));
  logger.info(calcular(3, 2));
  logger.info(calcular(2, 3));
  logger.info('----------');
};

module.exports = { calcular3 };
