const exercicio07 = require('../../src/exercicio-07');

describe('Exercicio-07', () => {
  it('should return [-1,-2] when bhaskara(1, 3, 2)', () => {
    expect(exercicio07.bhaskara(1, 3, 2)).toEqual([-1, -2]);
  });
  it('should return "Delta é negativo" when bhaskara(3, 1, 2)', () => {
    expect(exercicio07.bhaskara(3, 1, 2)).toEqual('Delta é negativo');
  });
  it('should return [3,2] when bhaskara(1, -5, 6)', () => {
    expect(exercicio07.bhaskara(1, -5, 6)).toEqual([3, 2]);
  });
  it('should return [0.7032574095488145,-2.369924076215481] when bhaskara(3, 5, -5)', () => {
    expect(exercicio07.bhaskara(3, 5, -5)).toEqual([
      0.7032574095488145,
      -2.369924076215481,
    ]);
  });
});
