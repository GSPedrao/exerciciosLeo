function media() {
    let nome = window.prompt('Qual o nome do aluno?')
    let n1 = window.prompt('Digite sua primeira nota:')
    let n2 = window.prompt('Digite sua segunda nota:')
     let resultado = (n1 + n2)

    if(resultado >= 6) {
       window.alert('Parabéns ' + nome + ' você passou!')
    }else{
        window.alert('Estude mais' + nome)
    }
}
