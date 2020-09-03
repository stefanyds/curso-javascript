//Criando objeto de forma dinâmica
const prod1 = {}
prod1.nome = 'Celular Motorola Moto G6'
prod1.preco = 680.50
prod1['Desconto legal'] = 0.40
console.log(prod1)

//Criando objeto de forma literal
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        prop1: 1,
        obj: {
            prop1: 2
        }
    }
}
console.log(prod2)

//Exemplo de JSON
//validar em https://jsonlint.com/
let json = `
{
    'nome': 'CamisaPolo',
    'preco': 79.90,
    'obj': {
        'prop1': 1,
        'obj': {
            'prop1': 2
        }
    }
}`