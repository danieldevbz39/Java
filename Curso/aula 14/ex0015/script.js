function verificar() {
    var data = new Date() //trazendo data
    var ano = data.getFullYear() //trazendo data com 4 dígitos
    var fano= document.getElementById ('txtano')// trazendo ano
    var res = document.querySelector ('div#res') // resultado ano
    // Se fano.value for igual a 0 ou então fano for maior que o ano atual
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')//se estiver vazio o ano atual...
    } else {
        var fsex = document.getElementsByName('radsex') //marcadores mac. fem.
        var idade = ano - Number(fano.value) //calculando idade... valor ano atual - ano digitado
        var genero = ''
        var img = document.createElement('img')//adicionando imagem
        img.setAttribute('id', 'foto') //adicionando atributo para foto

        if (fsex[0].checked) { //se o que tiver marcado for fsex 0...
            genero = 'Homem'
            if (idade >=0 && idade < 10) { //se a idade estiver entre 0 e 10...
                //criança
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 21) { //se não, idade menor que 21...
                //Jovem
                img.setAttribute('src', 'homem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'marcelog.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex [1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) { //se a idade estiver entre 0 e 10...
                //criança
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 21) { //se não, idade menor que 21...
                //Jovem
                img.setAttribute('src', 'jmulher.png')
            } else if (idade < 50) {//se não, idade menor que 50...
                ///Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                // idoso
                img.setAttribute('src', 'idosa.png')
            }           
        }
        res.style.textAlign = 'center' //centralizando texto
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        res.appendChild(img)
    }

}