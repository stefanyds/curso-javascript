/*
    A finalidade deste programa é aplicar conceitos do curso de JavaScript.
    Com base no ano de nascimento e no sexo, o programa irá apresentar
    uma imagem e um texto informando se é Criança, Jovem, Adulto ou Idoso.

    Copyright (C) 2020 ProgrammerHero.com.br

    Este programa é um software gratuito: você pode redistribuí-lo e / ou modificar
    sob os termos da Licença Pública Geral GNU, publicada pela
    Free Software Foundation, versão 3 da Licença ou
    (a seu critério) qualquer versão posterior.

    Este programa é distribuído na esperança de que seja útil,
    mas SEM QUALQUER GARANTIA; sem sequer a garantia implícita de
    COMERCIALIZAÇÃO ou ADEQUAÇÃO PARA UMA FINALIDADE ESPECÍFICA. Veja o
    GNU General Public License para mais detalhes.

    Você deveria ter recebido uma cópia da Licença Pública Geral GNU
    junto com este programa. Caso contrário, consulte <http://www.gnu.org/licenses/>.
*/

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'img/homem-crianca.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/homem-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'img/mulher-crianca.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/mulher-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero: ${genero}. Idade detectada: ${idade}`
        res.appendChild(img)
    }
}