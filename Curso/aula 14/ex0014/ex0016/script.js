function contar() {
    let ini = document.getElementById('txti') // trazendo ini
    let fim = document.getElementById('txtf') // trazendo fim
    let passo = document.getElementById ('txtp') // trazendo passo
    let res = document.getElementById('res') //trazendo res

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //se o inicio estiver vazio ou o fim estiver vazio ou o passo estiver vazio
        res.innerHTML = 'Impossível contar'

    } else { //se não 
        res.innerHTML = 'Contando: <br>' //Texto contando com espaço
        let i = Number(ini.value)// Pegando valor de ini e convertendo para número
        let f = Number(fim.value)// Pegando valor de fim e convertendo para número
        let p = Number(passo.value)// Pegando valor de passo e convertendo para número
        if (p <= 0) { //se o passo for menor igual a 0
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1            
        }
        if(i < f) {//Se o valor do início for menor que o valor do final...
            for(let c = i; c <= f; c += p) { //CONTAGEM CRESCENTE---contador começa no início, enquanto contador for menor ou igual ao fim, contador recebe ele mesmo mais o passo 
                res.innerHTML += ` ${c} \u{1F449}`            
            }            
        } else { // CONTAGEM REGRESSIVA
            for(let c = i; c >= f; c -= p) {// enquanto contador for menor igual a fim, o contador perde o passo 
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}