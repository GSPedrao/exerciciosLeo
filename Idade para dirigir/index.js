function idade() {
    let nome = (prompt('Informe seu nome:'))
    let idade = Number(prompt('Informe sua idade:'))
    let pais = Number(prompt('Em qual país você mora? /n[1]Estados Unidos /n[2]Brasil'))

    let saida = document.getElementById('saida')
    switch (pais) {
        case 1:
            if (idade >= 16) {
                saida.innerHTML += `<p>${nome} você mora nos Estados Unidos, e com ${idade} anos já pode dirigir :D</p>`
            } else {
                saida.innerHTML = `<p>Lamento ${nome} você com ${idade} anos não pode dirigir nos Estados Unidos :(</p>`
            }
            break;
        case 2:
            if (idade >= 18) {
                saida.innerHTML = `<p>${nome} você mora no Brasil, e com ${idade} anos já pode dirigir :D</p>`
            } else {
                saida.innerHTML = `<p>Lamento ${nome} você com ${idade} anos não pode dirigir no Brasil :(</p>`
            }
            break;
        default:
            saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou (${nome}), (${idade}), mas não sei o que fazer com eles. </p>`
            break;
    }

}