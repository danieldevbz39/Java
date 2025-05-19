function carregar() { /*carregando função carregar */
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() /*carrregando data*/
    var hora = data.getHours() /*carregando horas */
    msg.innerHTML = `Agora são ${hora} horas.` /*carregando texto "agora..." */
    if (hora >= 0 && hora < 12) { // Se a hora atual for maior igual 0 e  hora menor que 12 é // Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f' 

    } else if (hora >= 12 && hora <= 18) { // Se a hora atual for maior igual 0 e  hora menor que 12 é // Bom tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'

    } else {
        // Se não.... //Bom noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}

