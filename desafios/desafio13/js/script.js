const start = document.querySelector('#start').addEventListener('click', Get)
const body = document.querySelector('body')

function Get() {
    body.style.backgroundColor = '#ffffff'

    let name = prompt('Digite o nome do aluno:')
    if (name == '') {
        name = 'X'
    }

    let notaOne = Number(prompt(`Primeira nota de ${name}:`))
    verifier(notaOne)
    let notaTwo = Number(prompt(`Segunda nota de ${name}:`))
    verifier(notaTwo)
    let average = calc(notaOne, notaTwo)
    buildResults(name, average)
}

function verifier(x, y) {
    if (x > 10 || y > 10) {
        alert(
            'O valor que você acabou de digitar está incorreto! Corrija e tente novamente.'
        )
        GetNotes()
    }
}

function calc(x, y) {
    return (x + y) / 2
}

function buildResults(x, y) {
    let result = document.querySelector('#result')

    if (y >= 7) {
        result.innerHTML = `A média de <strong>${x}</strong> é <strong>${y}</strong>, <strong style="background-color: #39ff14;">portanto foi aprovado(a)!<strong>`
    } else if (y >= 5) {
        result.innerHTML = `A média de <strong>${x}</strong> é <strong>${y}</strong>, <strong style="background-color: #f7fd04;">portanto precisa fazer segunda chamada!</strong>`
    } else {
        result.innerHTML = `A média de <strong>${x}</strong> é <strong>${y}</strong>, <strong style="background-color: #ffaabb;">portanto está em recuperação!</strong>`
    }
}
