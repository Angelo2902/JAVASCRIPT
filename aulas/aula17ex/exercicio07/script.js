let num = document.getElementById(num)
let res = document.getElementById(res)
let lista = document.getElementById(flista)
let arr = []

function isnum(n){
    if(Number(n.value) >= 1 && Number(n.value) <= 100){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isnum(num)){
        window.alert('tudo ok')

    }else{
        window.alert('valor invalido')
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
