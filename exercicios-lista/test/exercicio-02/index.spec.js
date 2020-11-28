const exercicio02 = require('../../src/exercicio-02');

describe('Exercicio-02', () => {
  it('should return "Equilátero"', () => {
    expect(exercicio02.vallados(2, 2, 2)).toEqual('Equilátero');
  });
  it('should return "Isosceles"', () => {
    expect(exercicio02.vallados(2, 3, 3)).toEqual('Isosceles');
    expect(exercicio02.vallados(50, 500, 500)).toEqual('Isosceles');
  });
  it('should return "Escaleno"', () => {
    expect(exercicio02.vallados(2, 3, 4)).toEqual('Escaleno');
    expect(exercicio02.vallados(50, 500, 600)).toEqual('Escaleno');
  });
});
