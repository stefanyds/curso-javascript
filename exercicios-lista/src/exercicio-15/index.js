const revenda = {
  comprarVeiculo(veiculo) {
    let msg = '';
    switch (veiculo) {
      case 'hatch':
        msg = 'Compra efetuada com sucesso';
        break;
      case 'sedan':
      case 'motorcycle':
      case 'truck':
        msg = 'Tem certeza que não prefere este modelo?';
        break;
      default:
        msg = 'Não trabalhamos com este tipo de automóvel aqui';
    }
    return msg;
  },
};

module.exports = { revenda };
