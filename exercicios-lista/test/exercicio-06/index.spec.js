const exercicio06 = require('../../src/exercicio-06');

describe('Exercicio-06', () => {
  it('should return 120 when JurosSimples(100,10/100,2)', () => {
    expect(exercicio06.JurosSimples(100, 10 / 100, 2)).toEqual(120);
  });
  it('should return 121.0 when JurosCompostos(100,10/100,2)', () => {
    expect(exercicio06.JurosCompostos(100, 10 / 100, 2)).toBe('121.00');
  });
});
