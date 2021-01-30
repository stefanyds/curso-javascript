const hortifruti = {
  venderFruta(fruta) {
    let mensagem = '';
    switch (fruta) {
      case 'maçã':
        mensagem = 'Não vendemos esta fruta aqui';
        break;
      case 'kiwi':
        mensagem = 'Estamos com escassez de kiwis';
        break;
      case 'melancia':
        mensagem = 'Aqui está, custa R$3,00 o quilo';
        break;
      default:
        mensagem = 'ERRO, FRUTA INVÁLIDA';
    }
    return mensagem;
  },
};

module.exports = { hortifruti };
