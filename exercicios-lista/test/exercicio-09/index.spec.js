const exercicio09 = require('../../src/exercicio-09');

describe('Exercicio-09', () => {
  it('should round the value to a multiple of 5 if the value is below the multiple of 5', () => {
    expect(exercicio09.arredondar(33)).toEqual(35);
    expect(exercicio09.arredondar(32)).toEqual(32);
    expect(exercicio09.arredondar(31)).toEqual(31);
  });

  it('should return the value if multiple of 5', () => {
    expect(exercicio09.arredondar(100)).toEqual(100);
  });

  it('should grade the student with a corrected and approved grade', () => {
    expect(exercicio09.classificaAluno(100)).toEqual({
      status: 'Aprovado',
      nota: 100,
    });
    expect(exercicio09.classificaAluno(38)).toEqual({
      status: 'Aprovado',
      nota: 40,
    });
    expect(exercicio09.classificaAluno(84)).toEqual({
      status: 'Aprovado',
      nota: 85,
    });
  });
  it('should grade the student with a corrected and failed grade', () => {
    expect(exercicio09.classificaAluno(37)).toEqual({
      status: 'Reprovado',
      nota: 37,
    });
    expect(exercicio09.classificaAluno(29)).toEqual({
      status: 'Reprovado',
      nota: 29,
    });
  });
});
