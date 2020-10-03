/**
 * Regra 1: Se a função é chamada como 'método' de um 'objeto', isto é, chamada com 'notação ponto', o valor de 'this' dentro da função é o objeto que o chamou.
 */

 const player = {
     name: 'Cloud', 
     sayName() {
         //que valor tenho aqui?
         //é importante olhar o momento que a função é chamada!
         console.log(this.name)
     }
 }

//O 'this' olha pra quem está antes do ponto, nesse caso, 'player'.
//Dentro da função 'sayName' o 'this' é o que está antes do ponto (player).
//O objeto que chama a função 'sayName' é 'player'.
//Nesta chamada o 'this' será 'player'.
 player.sayName()