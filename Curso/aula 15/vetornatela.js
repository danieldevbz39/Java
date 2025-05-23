let valores = [8, 1, 7, 4, 2, 9]//Adicionando valores
valores.sort() //Ordenando valores


for (let pos =0; pos < valores.length; pos++) {// Enquanto pos for menor do que o tamanho do vetor, pos recebe mais 1
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)    
} console.log(`----------------------------`) //Colocando traços para separar


for(let pos in valores) { //Para cada posição em numero...
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
    