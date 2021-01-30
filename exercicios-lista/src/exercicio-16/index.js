const calculator = {
  status: '',
  solve(num1, op, num2) {
    let result = 0;
    switch (op) {
      case '+':
        result = num1 + num2;
        this.status = 'Ok';
        break;
      case '-':
        result = num1 - num2;
        this.status = 'Ok';
        break;
      case '*':
        result = num1 * num2;
        this.status = 'Ok';
        break;
      case '/':
        result = num1 / num2;
        this.status = 'Ok';
        break;
      default:
        result = 0;
        this.status = 'Operação inválida';
    }
    return result;
  },
};

module.exports = { calculator };
