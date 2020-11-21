const logger = require('../../logger');

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
  logger.info('Exercício 07');
  logger.info(bhaskara(1, 3, 2));
  logger.info(bhaskara(3, 1, 2));
  logger.info(bhaskara(3, 5, -5));
  logger.info('----------');
};

module.exports = { bhaskaraCalcular };
