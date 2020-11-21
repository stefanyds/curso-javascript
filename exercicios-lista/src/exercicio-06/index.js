const logger = require('../../logger');

const JurosSimples = (capitalInicial, taxa, tempo) => {
  const JSimples = capitalInicial + capitalInicial * taxa * tempo;
  return JSimples;
};
const JurosCompostos = (capitalInicial, taxa, tempo) => {
  const JCompostos = capitalInicial * (1 + taxa) ** tempo;
  return JCompostos.toFixed(2);
};

const calcularJSC = () => {
  logger.info('Exercício 06');
  logger.info(JurosSimples(100, 10 / 100, 16));
  logger.info(JurosCompostos(100, 10 / 100, 16));
  logger.info('----------');
};

module.exports = { calcularJSC };
