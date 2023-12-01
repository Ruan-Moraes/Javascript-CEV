const button = document
    .querySelector('#btn')
    .addEventListener('click', showTabuada)

function showTabuada() {
    let number = Number(document.querySelector('#number').value)
    let tabuada = document.querySelector('#tabuada')
    tabuada.innerHTML = ''

    for (let cont = 1; cont <= 10; cont++) {
        let numberTabuada = number * cont
        let itensTabuada = document.createElement('option')
        itensTabuada.innerHTML = `${number} X ${cont} = ${numberTabuada}`
        tabuada.appendChild(itensTabuada)
    }
}x
