const JurosSimples = (capitalInicial, taxa, tempo) => {
  const JSimples = capitalInicial + capitalInicial * taxa * tempo;
  return JSimples;
};
const JurosCompostos = (capitalInicial, taxa, tempo) => {
  const JCompostos = capitalInicial * (1 + taxa) ** tempo;
  return JCompostos.toFixed(2);
};

module.exports = { JurosSimples, JurosCompostos };
