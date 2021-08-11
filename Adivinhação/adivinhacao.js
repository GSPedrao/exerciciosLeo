var resultado = document.querySelector('section#resultado')
var computador = 0
var jogador = 0

function sortear() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function adivinhe() {
    jogador = Number(window.prompt('Qual é o seu palpite'))

    if (jogador < computador) {
        resultado.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        resultado.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR<strong>!</p>`
    } else if (jogador == computador) {
        resultado.innerHTML += `<p><strong>VOCÊ ACERTOU!!!</strong> Meu número é ${computador}</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}