function atravessar(){

     let chegada = Number(prompt('qual é o tamanho da rua em metros, exemplo(15)'))
     let passos = chegada/0.82
    

     let saida = document.getElementById('saida')
     saida.innerHTML = `<p>Faltam ${passos} passos para você chegar lá, não desista!!</p>`

}
