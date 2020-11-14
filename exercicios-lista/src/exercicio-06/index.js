const JurosSimples = (capitalInicial, taxa, tempo) => {
  const JSimples = capitalInicial + capitalInicial * taxa * tempo;
  return JSimples;
};
const JurosCompostos = (capitalInicial, taxa, tempo) => {
  const JCompostos = capitalInicial * (1 + taxa) ** tempo;
  return JCompostos.toFixed(2);
};

const calcularJSC = () => {
  console.log('Exercício 06');
  console.log(JurosSimples(100, 10 / 100, 16));
  console.log(JurosCompostos(100, 10 / 100, 16));
  console.log('----------');
};

module.exports = { calcularJSC };
