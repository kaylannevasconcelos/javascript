function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'babyboy.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'teenboy.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'man.png')
            } else if (idade >= 60) {
                //idoso
                img.setAttribute('src', 'oldman.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade <= 10) {
                img.setAttribute('src', 'babygirl.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'teengirl.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'woman.png')
            } else if (idade >= 60) {
                img.setAttribute('src', 'oldwoman.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}