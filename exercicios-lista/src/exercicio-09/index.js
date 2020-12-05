const arredondar = (nota) => {
  if (nota % 5 > 2) {
    return nota + (5 - (nota % 5));
  }
  return nota;
};

const classificaAluno = (nota) => {
  const resultado = { status: '', nota: 0 };
  let notaCorrigida = nota;

  if (nota >= 38) {
    notaCorrigida = arredondar(nota);
  }

  resultado.nota = notaCorrigida;
  if (notaCorrigida >= 40) {
    resultado.status = 'Aprovado';
  } else {
    resultado.status = 'Reprovado';
  }

  return resultado;
};
module.exports = { arredondar, classificaAluno };
