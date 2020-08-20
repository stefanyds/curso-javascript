const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6ba',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao //Se tag existir, a função retornará ela mesmo. Caso contrário, vai retornar 'padrão'
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()
    
    elemento.style.borderColor = colors.get(tagName) //'#616161'

    //Renderiza o label apenas se não existir a classe '.nolabel'
    if (!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName) //'#616161'
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
    
})