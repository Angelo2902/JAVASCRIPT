function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
        var genero = ''

        var img = document.createElement('img')//cria uma div usando javascript
        img.setAttribute('id', 'foto')//coloca um atributo na div img, nesse caso o id dela é foto
        res.style.textAlign = 'center'
        
        if (fsex[0].checked){
            genero = 'um Homem'

            if (idade >= 0 && idade < 10){
                img.setAttribute('src', '../imagens/bebem.png')//criança
            }else if (idade < 21){
                img.setAttribute('src', '../imagens/jovemm.png')//jovem
            }else if (idade < 50){
                img.setAttribute('src', '../imagens/tarde.png')//adulto
            }else{
                img.setAttribute('src', '../imagens/velhom.png')//idoso
            }
            
        }else if (fsex[1].checked){
            genero = 'uma Mulher'

            if (idade >= 0 && idade < 10){
                img.setAttribute('src', '../imagens/bebef.png') //criança
            }else if (idade < 21){
                img.setAttribute('src', '../imagens/jovemf.png') //jovem
            }else if (idade < 50){
                img.setAttribute('src', '../imagens/noite.png') //adulto
            }else{
                img.setAttribute('src', '../imagens/velhof.png') //idoso
            }
        
            
        }
        res.innerHTML = `você é ${genero} com a idade de ${idade} anos`

        res.appendChild(img)//adiciona um elemento apos todo o processo da function
    }
}