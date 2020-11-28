const avaliaPontuacoes = (pontuacoes) => {
  const listaPontos = [];
  pontuacoes.split(',').map((item) => {
    listaPontos.push(Number(item));
    return item;
  });
  let qtdQuebraRecordes = 0;
  let piorJogo = 1;
  let maiorPontuacao = listaPontos[0];
  let menorPontuacao = listaPontos[0];

  for (let i = 1; i <= listaPontos.length; i++) {
    if (listaPontos[i] > maiorPontuacao) {
      maiorPontuacao = listaPontos[i];
      qtdQuebraRecordes++;
    } else if (listaPontos[i] < menorPontuacao) {
      menorPontuacao = listaPontos[i];
      piorJogo = i + 1;
    }
  }
  return [qtdQuebraRecordes, piorJogo];
};
// function PontuacaoJogos(pontuacoes) {
//   let recordes = 0;
//   let piorJogo = 0;
//   // transformando a string em array
//   const listaPontos = pontuacoes.split(',');
//   let maiorPontuacao = listaPontos[0];
//   let menorPontuacao = listaPontos[0];
//   for (let i = 1; i <= listaPontos.length; i++) {
//     if (listaPontos[i] > maiorPontuacao) {
//       maiorPontuacao = listaPontos[i];
//       recordes++;
//     }
//     if (listaPontos[i] < menorPontuacao) {
//       menorPontuacao = listaPontos[i];
//       piorJogo = i + 1;
//     }
//   }
//   return [recordes, piorJogo];
// }

// const executar = () => {
//   logger.info('Exercício 08');
//   logger.info(PontuacaoJogos(stringPontuacoes));
//   logger.info('----------');
// };

module.exports = { avaliaPontuacoes };
