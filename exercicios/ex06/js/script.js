const button0 = document
    .querySelector('#btn0')
    .addEventListener('click', getNumber)

const button1 = document
    .querySelector('#btn1')
    .addEventListener('click', analysisNumber)

let numbers = []
const table = document.querySelector('#table')
const results = document.querySelector('#results')
let analysis = document.createElement('div')

function getNumber() {
    let number = Number(document.querySelector('#number').value)
    if (number < 0 || number > 100) {
        alert('Número digitado incorreto! Tente novamente.')
        number = fixNumber(number)
        addNumber(number)
    } else {
        addNumber(number)
    }
}

function fixNumber(x) {
    x = Number(prompt('Digite um número entre 0 até 100.'))

    if (x < 0 || x > 100) {
        x = fixNumber(x)
        return x
    } else {
        return x
    }
}

function addNumber(x) {
    cont = numbers.push(x)
    buildTable(x)
}

function buildTable(x) {
    let item = x
    let $item = document.createElement('option')
    $item.innerHTML = `${item}`
    table.appendChild($item)
}

function analysisNumber() {
    let totNumbers = 0
    for (let cont = 0; cont < numbers.length; cont++) {
        totNumbers += numbers[cont]
    }

    if (numbers.length == 0) {
        alert('Adicione números para continuar')
    } else {
        analysis.innerHTML = `
        <p>A todo, temos <strong>${
            numbers.length
        }</strong> números cadastrados.<p>
        <p>O maior valor informado foi de <strong>${Math.max.apply(
            null,
            numbers
        )}</strong>.</p>
        <p>O menor valor informado foi de <strong>${Math.min.apply(
            null,
            numbers
        )}</strong></p>
        <p>A somar entre todos os números é <strong>${totNumbers}</strong></p>
        <p>A média entre os números são <strong>${
            (totNumbers / numbers.length).toFixed(2)
        }</strong></p>
        `
        results.appendChild(analysis)
    }
}
