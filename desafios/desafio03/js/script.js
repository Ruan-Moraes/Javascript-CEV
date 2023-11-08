let btn = document.querySelector('button')
btn.addEventListener('click', sucessorAntecessor)

function sucessorAntecessor() {
    let num = prompt(
        'Qual o número que você quer saber o antecessor e sucessor? '
    )
    let numMa = Number(num) + 1
    let numMe = Number(num) - 1
    alert(`O número ${num} tem o sucessor ${numMa} e antecessor ${numMe}.`)
}
