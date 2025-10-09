//RECURSIVIDADE ele chama uma função dentro da propria funçao
function fatorial(n){
    if ( n==1 ){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))