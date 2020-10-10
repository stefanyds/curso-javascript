//IIFE - Immediately Invoked Function Expression
//São funções executadas assim que são definidas
//Possuem 02 partes principais:
//1. A função anônima propriamente dita. Seu contexto léxico é encapsulado entre os '()'.
//2. Corresponde a expressão ().
(function(){
    console.log('Será executado imediatamente')
    console.log('Utilizandoo IIFE é possível fugir do escopo global!')
    console.log('Tudo o que for criado, fica dentro do escopo desta função!')
})()

//(...)()
