const exercicio13 = require('../../src/exercicio-13');

describe('Exercicio-13', () => {
  it('should return "invalid day" if  0 <= day >= 8', () => {
    expect(exercicio13.weekDays(0)).toBe('invalid day');
    expect(exercicio13.weekDays(8)).toBe('invalid day');
  });
  it('should return "weekend" if day = 1 || 7', () => {
    expect(exercicio13.weekDays(1)).toBe('weekend');
    expect(exercicio13.weekDays(7)).toBe('weekend');
  });
  it('should return "weekday" if  2=< day <= 6', () => {
    expect(exercicio13.weekDays(2)).toBe('weekday');
    expect(exercicio13.weekDays(3)).toBe('weekday');
    expect(exercicio13.weekDays(4)).toBe('weekday');
    expect(exercicio13.weekDays(5)).toBe('weekday');
    expect(exercicio13.weekDays(6)).toBe('weekday');
  });
  it('should return "invalid day" if day = a', () => {
    expect(exercicio13.weekDays('a')).toBe('invalid day');
  });
});
