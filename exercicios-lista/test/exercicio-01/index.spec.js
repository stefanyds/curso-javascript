const exercicio01 = require('../../src/exercicio-01');

describe('Exercicio-01', () => {
  it('should return {soma:3, subtracao: -1, multiplicacao: 2, divisao: 0.5} if params is equal to (1,2)', () => {
    expect(exercicio01.calcular(1, 2)).toEqual({
      soma: 3,
      subtracao: -1,
      multiplicacao: 2,
      divisao: 0.5,
    });
  });

  it('should return {soma:10, subtracao: 0, multiplicacao: 25, divisao: 1} if params is equal to (5,5)', () => {
    expect(exercicio01.calcular(5, 5)).toEqual({
      soma: 10,
      subtracao: 0,
      multiplicacao: 25,
      divisao: 1,
    });
  });
});
