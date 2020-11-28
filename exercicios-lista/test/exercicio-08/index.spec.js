const exercicio08 = require('../../src/exercicio-08');

describe('Exercicio-08', () => {
  it('should return [3,7] when avaliaPontuacoes("10,20,20,8,25,3,0,30,1")', () => {
    const stringPontuacoes = '10,20,20,8,25,3,0,30,1';
    expect(exercicio08.avaliaPontuacoes(stringPontuacoes)).toEqual([3, 7]);
  });
});
