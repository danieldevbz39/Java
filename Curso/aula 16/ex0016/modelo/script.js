let num = document.querySelector('input#fnum')// recebe numero
let lista = document.querySelector('select#flista') // recebe lista
let res = document.querySelector('div#res') // recebe resultdo
let valores = [] //recebe valores

function isNumero(n) { 
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }
    num.value = ''
    num.focus()
}


function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valore informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valore informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> a média dos valores digitados é ${media}.</p>`
    }
}