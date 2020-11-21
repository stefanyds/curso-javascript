const logger = require('../../logger');

function formatarValorDecimal(a) {
  // toFixed(2) duas casas decimais
  // toString e replace para poder mudar . - > ,
  logger.info('Exercício 05');
  const valorEmReais = `R$ ${a.toFixed(2).toString().replace('.', ',')}`;
  logger.info(valorEmReais);
  logger.info('----------');
}

module.exports = { formatarValorDecimal };
// formatarValorDecimal(0.1+0.2)
