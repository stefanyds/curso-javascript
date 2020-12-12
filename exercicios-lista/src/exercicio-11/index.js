const isAnoBissexto = (ano) => {
  let isBissexto = false;
  if (ano <= 0) {
    isBissexto = false;
  } else if (ano % 400 === 0) {
    isBissexto = true;
  } else if (ano % 100 === 0) {
    isBissexto = false;
  } else if (ano % 4 === 0) {
    isBissexto = true;
  }
  return isBissexto;
};

module.exports = { isAnoBissexto };
