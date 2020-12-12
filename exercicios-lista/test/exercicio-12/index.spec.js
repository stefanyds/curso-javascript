const exercicio12 = require('../../src/exercicio-12');

describe('exercicio12', () => {
  it('should return 3.628.800 if factorial 10', () => {
    expect(exercicio12.factorial(10)).toEqual(3628800);
  });
  it('should return 120 if factorial 5', () => {
    expect(exercicio12.factorial(5)).toEqual(120);
  });
  it('should return 1 if factorial 1', () => {
    expect(exercicio12.factorial(0)).toEqual(1);
  });
  it('should return 720 if factorial 6', () => {
    expect(exercicio12.factorial(6)).not.toEqual(900);
    expect(exercicio12.factorial(6)).toEqual(720);
  });
});
