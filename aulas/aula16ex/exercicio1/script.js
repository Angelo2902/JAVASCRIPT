let n = document.getElementById('inum')
let tex = document.getElementById('itex')
let num = Number(n.value)
let valores = []
function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isnumero(n.value) && !inlista(n.value, valores)){
        
        let area = document.createElement('option')
        area.text = `valor ${n.value} adicionado`
        tex.appendChild(area)

    }else{

        window.alert('Por favar digitar um número dentro dos limites')
            
    }
    

}
function finalizar(){
    
    let a = Number(n.value)
    let res = document.getElementById('res')
    res.innerHTML += `${a.value} números adicionados`
}