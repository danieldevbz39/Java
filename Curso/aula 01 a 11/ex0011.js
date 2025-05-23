var idade = 3 // variável idade
if (idade <18) { //Se idade menor que 18
    console.log ('Menor de idade')
} else { // Se não...
    console.log ('Maior de idade')
}

var idade = 22// variável idade
console.log(`Você tem ${idade} anos.`)
if (idade <16) { //Se idade menor que 18
    console.log ('Não vota.')
} else if (idade < 18 || idade >= 65) {//Se idade for menor 18 ou idade 65
    console.log('voto opcional.')
} else if (idade >=18) { //Se idade for maior igual 18
    console.log('Voto obrigatório.')
}