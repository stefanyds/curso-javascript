const exercicio05 = require('../../src/exercicio-05');

describe('Exercicio-05', () => {
  it('should return R$ 0,30', () => {
    expect(exercicio05.formatarValorDecimal(0.1 + 0.2)).toEqual('R$ 0,30');
  });
});
