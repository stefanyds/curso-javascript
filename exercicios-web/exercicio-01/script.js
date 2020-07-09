/*
    A finalidade deste programa é aplicar conceitos do curso de JavaScript.
    Com base na hora do sistema, o programa irá exibir um texto informando a hora, 
    uma imagem que representa a hora irá modificar a cor de fundo da página (background).

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

function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Àgora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "img/manha.png"
        window.document.body.style.background = '#C5732C'
    } else if (hora >= 12 && hora <= 18) {
        img.src = "img/tarde.png"
        window.document.body.style.background = '#643C51'
    } else {
        img.src = "img/noite.png"
        window.document.body.style.background = '#162025'
    }
}