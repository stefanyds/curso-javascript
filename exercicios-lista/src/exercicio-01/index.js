// function Ope(a,b){
//     logger.info(a+b,a-b,a*b,a/b)
// }

// Execução
// Ope(4,2)

// Função Arrow
const calcular = (a, b) => {
  const result = {
    soma: a + b,
    subtracao: a - b,
    multiplicacao: a * b,
    divisao: a / b,
  };
  return result;
};

// Execução
// calcular(5,5)

// quem importar o arquivo, pode usar:
module.exports = { calcular };
