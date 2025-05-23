let num = [5, 8, 2, 9, 3] //Adicionando valores
num.push(1) //Exibindo em ordem com primeiro valor em primeiro
num.sort()// Exibindo em ordem crescente
console.log(num) //Exibindo prinmeiro valor
console.log (`Nosso valor é o ${num}`)//Exibindo valores
console.log(`O vetor tem ${num.length} posições`) //Exibindo posições
console.log(num [0]) //Exibindo posições
console.log(`O primeiro valor do vetor é: ${num[0]}`)//Exibindo prinmeiro valor

let pos = num.indexOf(5) //procurando valores
if (pos == -1) { //se pos for igual a -1
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
