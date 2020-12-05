//acumulador

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

const resultado = alunos
  .map((aluno) => aluno.nota)
  .reduce((acumulador, nota) => {
    console.log(acumulador, nota);
    return acumulador + nota;
  }, 0);

console.log(resultado);
