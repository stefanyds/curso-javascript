const { hortifruti } = require('../../src/exercicio-14');

describe('Exercicio-14', () => {
  it('should return "Não vendemos esta fruta aqui" if fruit is "maçã"', () => {
    expect(hortifruti.venderFruta('maçã')).toBe('Não vendemos esta fruta aqui');
  });
  it('should return "ERRO, FRUTA INVÁLIDA" if fruit is "morango"', () => {
    expect(hortifruti.venderFruta('morango')).toBe('ERRO, FRUTA INVÁLIDA');
    expect(hortifruti.venderFruta('alcatra')).toBe('ERRO, FRUTA INVÁLIDA');
  });
  it('should return "Estamos com escassez de kiwis" if fruit is "kiwi"', () => {
    const msg = 'Estamos com escassez de kiwis';
    expect(hortifruti.venderFruta('kiwi')).toBe(msg);
  });
  it('should return "Aqui está, custa R$3,00 o quilo" if fruit is "melancia"', () => {
    const msg = 'Aqui está, custa R$3,00 o quilo';
    expect(hortifruti.venderFruta('melancia')).toBe(msg);
  });
});
