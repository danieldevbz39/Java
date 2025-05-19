var agora = new Date()
var hora = agora.getHours() //pegando hora atual
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) { // Se hora for menor que 12...
    console.log('Bom dia!')
} else if (hora <18) {// Se hora for menor que 18...
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}