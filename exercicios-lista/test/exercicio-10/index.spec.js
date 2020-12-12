const exercicio10 = require('../../src/exercicio-10');

describe('exercício 10', () => {
  it('Should return true if the params equal 3', () => {
    expect(exercicio10.verifyNumber(3)).toBe(true);
  });

  it('Should return false if the params equal 2', () => {
    expect(exercicio10.verifyNumber(2)).toBe(false);
  });

  it('Should return true if the params equal 150', () => {
    expect(exercicio10.verifyNumber(150)).toBe(true);
  });
});
