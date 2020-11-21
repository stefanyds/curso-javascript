const logger = require('../../logger');
// function Ope(a,b){
//     logger.info(a+b,a-b,a*b,a/b)
// }

// Execução
// Ope(4,2)

// Função Arrow
const calcular = (a, b) => {
  logger.info('Exercício 01');
  logger.info('----------');
  const result = {
    soma: a + b,
    subtracao: a - b,
    multiplicacao: a * b,
    divisao: a / b,
  };
  logger.info(
    `soma = ${result.soma}, subtracao = ${result.subtracao}, multiplicacao = ${result.multiplicacao}, divisao = ${result.divisao}`
  );
  logger.info('----------');
  return result;
};

// Execução
// calcular(5,5)

// quem importar o arquivo, pode usar:
module.exports = { calcular };
