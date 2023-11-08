let input = document
    .querySelector('input[type="submit"]')
    .addEventListener('click', CalcD)

function CalcD() {
    event.preventDefault()


    let product = document.querySelector('#product').value
    let value = Number(document.querySelector('#value').value)
    let discount = Number(document.querySelector('#discount').value)

    if (product.length == 0) {
        alert(
            'O produto está sem nome! Portanto receberá um nome "X" para ser referenciado.'
        )
        product = 'X'
    }

    if (value <= 0) {
        alert('O valor tem que ser maior que 0! Digite um valor apto.')
        value = Number(document.querySelector('#value').value)
    } else if (discount <= 0 || discount > 100) {
        alert(
            'O desconto tem que ser maior que {0} e menor que {100}! Digite um valor apto.'
        )
        discount = Number(document.querySelector('#value').value)
    } else {
        let $discount = value - (value * discount) / 100
        let discountT = value - $discount
        let res = document.querySelector('#res')
        let $res = document.createElement('p')
        $res.innerHTML = `O valor do(a) <strong>${product}</strong> é <strong>R$${value}</strong> e o total do desconto é <strong>R$${discountT.toFixed(
            2
        )}</strong>, portanto o valor do produto mudou para <strong>R$${$discount}</strong>.`
        res.appendChild($res)
    }
}
