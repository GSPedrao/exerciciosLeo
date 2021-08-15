function estacao() {
    let mes = prompt('ditite seu mês exemplo(semtembro) ou (9):')
    let saida = document.querySelector('section#saida')
    let estacao

    switch (mes.toUpperCase()) {
        case 'JANEIRO':
        case 'FEVEREIRO':
        case 'MARÇO':
        case '1':
        case '2':
        case '3':
            estacao = 'VERÃO'
            break
        case 'ABRIL':
        case 'MAIO':
        case 'JUNHO':
        case '4':
        case '5':
        case '6':

            estacao = 'OUTONO'
            break
        case 'JULHO':
        case 'AGOSTO':
        case 'SETEMBRO':
        case '7':
        case '8':
        case '9':
            estacao = 'INVERNO'
            break
        case 'OUTUBRO':
        case 'NOVEMBRO':
        case 'DEZEMBRO':
        case '10':
        case '11':
        case '12':
            estacao = 'PRIMAVERA'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }
    saida.innerHTML = `<p>no mês de <mark>${mes}</mark>, estamos na estação <strong>${estacao}</strong>.</p>`
}