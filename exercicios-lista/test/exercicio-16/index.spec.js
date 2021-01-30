const { calculator } = require('../../src/exercicio-16');

describe('Exercicio-16', () => {
  it('should return 5 if params equals (2, "+", 3)', () => {
    expect(calculator.solve(2, '+', 3)).toEqual(5);
    expect(calculator.status).toBe('Ok');
  });
  it('should return "calculator.status: Operação inválida and result = 0" if operation is not [+, -, *, /]', () => {
    expect(calculator.solve(2, '%', 3)).toEqual(0);
    expect(calculator.status).toBe('Operação inválida');
    expect(calculator.solve(2, '!', 3)).toEqual(0);
    expect(calculator.status).toBe('Operação inválida');
  });
  it('should return -1 if params equals (2, "-", 3)', () => {
    expect(calculator.solve(2, '-', 3)).toEqual(-1);
    expect(calculator.status).toBe('Ok');
  });
  it('should return 6 if params equals (2, "*", 3)', () => {
    expect(calculator.solve(2, '*', 3)).toEqual(6);
    expect(calculator.status).toBe('Ok');
  });
  it('should return 0.6666666666666666 if params equals (2, "/", 3)', () => {
    expect(calculator.solve(2, '/', 3)).toEqual(0.6666666666666666);
    expect(calculator.status).toBe('Ok');
  });
});
