let num = document.getElementById(num)
let res = document.getElementById(res)
let lista = document.getElementById(flista)
let arr = []

function isnum(n){
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
    if (isnum(num.value) && !inlista(num.value, arr)){
        window.alert('tudo ok')

    }else{
        window.alert('valor invalido')
    }

}