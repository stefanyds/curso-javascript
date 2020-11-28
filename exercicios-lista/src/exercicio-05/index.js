function formatarValorDecimal(a) {
  // toFixed(2) duas casas decimais
  // toString e replace para poder mudar . - > ,
  const valorEmReais = `R$ ${a.toFixed(2).toString().replace('.', ',')}`;
  return valorEmReais;
}

module.exports = { formatarValorDecimal };
// formatarValorDecimal(0.1+0.2)
