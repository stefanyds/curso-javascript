//CODIGO NAO EXECUTAVEL !!!

//ABORDAGEM INTUITIVA
DADOS (string, number)
:INICIO
      LINHA CODIGO 1
      LINHA CODIGO 2
      LINHA CODIGO 3
      ...
      GOTO :CALC_FRETE
:FIM_CALCULO
    LINHA CODIGO 10

:CALC_FRETE
    LINHA CODIGO 445
    LINHA CODIGO 446
    LINHA CODIGO 447
    ...
    GOTO :FIM_CALCULO

//ABORDAGEM ESTRUTURADA (FUNCIONAL)
DADOS
function init()
function calculafrete()
function finalize()
procedure print 

//ABORDAGEM ESTRUTURADA (ORIENTADA A OBJETOS)
Class/Object {
  atributos (dados)
  metodos (funcoes) //toda a ação que conseguimos realizar transformando um atributo
}