/* 
uma função nessecita de uma chamada pra poder se iniciar
possui também um parâmetro, uma ação e um retorno

function ação(parametro){
bloco da ação
}

ação(5) essa é a chamada

*/

function parimp(n) {
    if (n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
let res = parimp(10)
console.log(res)