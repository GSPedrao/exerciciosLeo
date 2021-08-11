function media() {
    var nome = window.prompt('Qual o nome do aluno?');
    var n1 = Number(window.prompt('Digite sua primeira nota:'));
    var n2 = Number(window.prompt('Digite sua segunda nota:'));
    var resultado = (n1 + n2);
    
    if (resultado >= 6) {
        alert('Parabéns ' + nome + ' você passou!');
    } else {
        alert('Estude mais ' + nome);
    }
}