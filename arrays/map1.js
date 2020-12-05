//Array.prototype.map()

const nums = [1, 2, 3, 4, 5];

let resultado = nums.map((e) => {
  return e * 2;
});

console.log(nums, resultado);

const soma10 = (e) => e * 10;
const triplo = (e) => e * 3;
const paraReal = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraReal);
console.log(resultado);
