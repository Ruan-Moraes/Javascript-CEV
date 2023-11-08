let btn = document.querySelector('button')
btn.addEventListener('click', calcularTroco)

function calcularTroco() {
    let balance = prompt('Quanto de dinheiro você tem?')
    let name = prompt('Qual é o nome do produto que você está comprando?')
    let value = prompt(`Qual é o valor do produto ${name}?`)
    console.log(balance)
    console.log(value)
    if (Number(value) < Number(balance)) {
        let difference = balance - value
        alert(`O produto "${name}" custa ${value} e você tem ${balance}, portanto o troco é ${difference}R$`)
    } else {
        alert('Saldo é insuficiente!')
    }
}