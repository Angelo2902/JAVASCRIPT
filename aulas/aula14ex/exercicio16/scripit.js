function somar(){
    
    var ini = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var pas  = document.getElementById('ipasso')
    let res = document.getElementById('res')
    

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO], VOCE DEIXOU ALGO EM BRANCO')
    } else {
        res.innerHTML = 'contando: ... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0){
            window.alert('passo invalido, sera considerado 1')
            p = 1
        }

        if(i < f){
            /*contagem crescente */
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} `
            }
        }else{
            /*contagem regressiva */
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} `
            }
        }
    }

    
}
