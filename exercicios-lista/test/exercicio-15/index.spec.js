const { revenda } = require('../../src/exercicio-15');

describe('Exercicio-15', () => {
  it('should return "Compra efetuada com sucesso" if choice is "hatch"', () => {
    expect(revenda.comprarVeiculo('hatch')).toBe('Compra efetuada com sucesso');
  });
  it('should return "Não trabalhamos com este tipo de automóvel aqui" if choice is "SUV"', () => {
    const mensagem = 'Não trabalhamos com este tipo de automóvel aqui';
    expect(revenda.comprarVeiculo('SUV')).toBe(mensagem);
  });
  it('should return "Não trabalhamos com este tipo de automóvel aqui" if choice is "bike"', () => {
    const mensagem = 'Não trabalhamos com este tipo de automóvel aqui';
    expect(revenda.comprarVeiculo('bike')).toBe(mensagem);
  });
  it('should return "Tem certeza que não prefere este modelo?" if choice is not "hatch"', () => {
    const mensagem = 'Tem certeza que não prefere este modelo?';
    expect(revenda.comprarVeiculo('sedan')).toBe(mensagem);
    expect(revenda.comprarVeiculo('motorcycle')).toBe(mensagem);
    expect(revenda.comprarVeiculo('truck')).toBe(mensagem);
  });
});
