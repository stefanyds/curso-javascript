const exercicio11 = require('../../src/exercicio-11');

describe('Exercicio-11', () => {
  it('should return false if ano <= 0', () => {
    expect(exercicio11.isAnoBissexto(0)).toBe(false);
  });
  it('should return true if ano = 400', () => {
    expect(exercicio11.isAnoBissexto(400)).toBe(true);
  });
  it('should return false if ano = 100', () => {
    expect(exercicio11.isAnoBissexto(100)).toBe(false);
  });
  it('should return true if ano % 4 = 0', () => {
    expect(exercicio11.isAnoBissexto(4)).toBe(true);
  });
  it('should return false if ano = 3', () => {
    expect(exercicio11.isAnoBissexto(3)).toBe(false);
  });
  it('should return true if ano is bissexto', () => {
    expect(exercicio11.isAnoBissexto(2020)).toBe(true);
    expect(exercicio11.isAnoBissexto(1996)).toBe(true);
    expect(exercicio11.isAnoBissexto(1176)).toBe(true);
    expect(exercicio11.isAnoBissexto(1908)).toBe(true);
  });
  it('should return false if ano is not bissexto', () => {
    expect(exercicio11.isAnoBissexto(2021)).toBe(false);
    expect(exercicio11.isAnoBissexto(1997)).toBe(false);
    expect(exercicio11.isAnoBissexto(1177)).toBe(false);
    expect(exercicio11.isAnoBissexto(1909)).toBe(false);
  });
});
