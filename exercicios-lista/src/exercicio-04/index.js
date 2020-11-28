const divisao = (a, b) => {
  const result = { resultado: Math.floor(a / b), resto: a % b };
  return result;
};

module.exports = { divisao };
// divisao(3,2)
