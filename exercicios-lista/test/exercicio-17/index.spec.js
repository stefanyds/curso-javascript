const { RH } = require('../../src/exercicio-17');

describe('Exercicio-17', () => {
  it('should return 1100 if salary is equal 1000 and plan A', () => {
    const obj = RH('A', 1000);
    expect(obj.calculateSalary()).toEqual(1100);
    expect(obj.msg).toBe('Plano válido');
  });
  it('should return 0 if salary is equal 0 and plan is not equal to "A, B or C"', () => {
    const obj = RH('D', 1000);
    expect(obj.calculateSalary()).toEqual(0);
    expect(obj.msg).toBe('Plano inválido');
  });
  it('should return 1150 if salary is equal 1000 and plan B', () => {
    const obj = RH('B', 1000);
    expect(obj.calculateSalary()).toEqual(1150);
    expect(obj.msg).toBe('Plano válido');
  });
  it('should return 1200 if salary is equal 1000 and plan C', () => {
    const obj = RH('C', 1000);
    expect(obj.calculateSalary()).toEqual(1200);
    expect(obj.msg).toBe('Plano válido');
  });
});
