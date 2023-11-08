let dolar = Number(prompt('Qual é a cotação do dólar?'))
let btn = document.querySelector('button')
btn.addEventListener('click', converter)

function converter() {
    if (dolar <= 0) {
        alert(
            'A cotação é inferior/igual à [0], considere a cotação de 6/12/2023 - R$ 4,89'
        )
        dolar = 4.89
    }

    let real = prompt('Quantos de R$ você tem?')
    
    if (real <= 0) {
        converter()
    } else {
        let realtodolar = real / dolar
        alert(
            `Você atualmente tem R$${real} e a cotação do dolar está em US$${dolar}, ou seja, você pode ter até US$${realtodolar.toFixed(
                2
            )}`
        )
    }
}
