 function gerar(){
    var num = document.getElementById('inum')
    var res = document.getElementById('seltab')

    
  

    if(num.value.length == 0){
        window.alert('favor colocar um número')
    }else{
       let n = Number(num.value)
       
       res.innerHTML = ''
        for(let c = 1;c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
        }



       /*while(c <= 10){
        let item = document.createElement('option')//cria um elemento option na lista
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        res.appendChild(item)
        c++
       }*/
    }

}