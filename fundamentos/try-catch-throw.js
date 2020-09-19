function tratarErroELancar(error) {
    // throw new Error('Ocorreu um erro: Verifique as propriedades do objeto')
    // throw 10
    // throw true
    // throw 'Ocorreu um erro: Verifique as propriedades do objeto'
    // throw {
    //     nome: error.name,
    //     msg: error.message,
    //     data: new Date()
    // }
    console.log('Ocorreu um erro de processamento: ', 
        {
            nome: error.name,
            msg: error.message,
            data: new Date()
        })
} 

function imprimirMaiusculo(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroELancar(error)
    } finally {
        console.log('Processamento encerrado.')
    }
}

const cliente = {nome: 'Carlos'}
imprimirMaiusculo(cliente)