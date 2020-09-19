/*
    TABELA VERDADE (AND) => && (operador binário)
* V and V => V
* V and F => F
* F and V => F
* F and F => F
*/

/*
    TABELA VERDADE (OR) => || (operador binário)
* V or V => V
* V or F => V
* F or V => V
* F or F => F
*/

/*
    TABELA VERDADE (XOR) => != (operador binário)
* V xor V => F 
* V xor F => V
* F xor V => V
* F xor F => F
 */

/*
    NEGAÇÃO LÓGICA => ! (operador unário) 
* !V => F
* !F => V
*/ 

/*
  * Cenário do processamento:
  * -------------------------
  * Você possui 02 trabalhos para executar na semana (trabalho1 e trabalho2)
  * 
  * Condição1: Comprar sorvete
  * - apenas se algum dos trabalhos for concluido (OR)
  * 
  * Condição2: Comprar TV 50"
  * - apenas se ambos trabalhos forem concluidos (AND)
  * 
  * Condição3: Comprar TV 32"
  * - apenas se algum dos trabalhos for concluido - mas não ambos (XOR)
  * 
  * Condição4: Manter-se saudável"
  * - apenas se não 'Comprar Sorvete' (NOT)
  * - nenhum dos trabalhos for concluidos
  * 
  * Instruções para codificar o programa:
  * --------------------------------------
  * 
  * 1. Criar uma função chamada 'compras', que recebe 02 parâmetros booleanos
  * informando se 'trabalho1' e 'trabalho2' foram executados. Retornar um 
  * objeto contendo os valores booleanos de cada expressão.
  * Exemplo:
  *     function compras(trabalho1, trabalho2) {
  *         ...
  *     }
  * 
  * 2. chamar a função 'compras' 04 vezes para simular o resultado dos 04 cenários.
  * Exemplo:
  *     console.log(compras(true, true))
  *     console.log(compras(true, false))
  *     console.log(compras(false, true))
  *     console.log(compras(false, false))
  */

  function compras(trab1, trab2) {
      if ((trab1 || trab2) == true) {
        if ((trab1 && trab2) == true){
            return 'Comprar sorvete e TV 50"'
        }
        if ((trab1 != trab2) == true){
            return 'Comprar  sorvete e TV 32"'
        }
        return 'Comprar sorvete'
      }  else {
          return 'Manter-se saudável'
      }
  }
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false, true))
console.log(compras(false, false))

//Versão do prof

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTV32 = trabalho1 != trabalho2
    const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor //!! transforma em boleano porque '^' estava trabalhando em binário
    const manterSaudavel = !comprarSorvete
    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}

}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false, true))
console.log(compras(false, false))