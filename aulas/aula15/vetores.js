let valores = [8, 1, 7, 4, 2, 9]
/*
for(let pos=0;pos <= valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for(let pos in valores){
    console.log(valores[pos])
}

// num.indexOf(n) diz qual o valor dentro da chave n
// quando o valor não é possivel encontrar ele devolve o valor -1
console.log(valores.indexOf(8))