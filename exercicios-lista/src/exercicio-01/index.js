const logger = require('../../logger');
// function Ope(a,b){
//     logger.info(a+b,a-b,a*b,a/b)
// }

// Execução
// Ope(4,2)

// Função Arrow
const calcular = (a, b) => {
  logger.info('Exercício 01');
  logger.info(`Soma = ${a + b} 
Subtração = ${a - b}
Multiplicação = ${a * b}`);
  logger.info('----------');
};

// Execução
// calcular(5,5)

// quem importar o arquivo, pode usar:
module.exports = { calcular };
