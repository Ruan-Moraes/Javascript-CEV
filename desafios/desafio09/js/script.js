let input = document
    .querySelector('input[type="submit"]')
    .addEventListener('click', Increase)

function Increase() {
    event.preventDefault()

    let name = document.querySelector('#name').value
    let wage = Number(document.querySelector('#wage').value)
    let increase = Number(document.querySelector('#increase').value)

    if (name.length == 0) {
        alert(
            'O nome do funcionário está vazio, considere como funcionário {X}.'
        )
        name = 'X'
    }

    if (wage <= 0) {
        alert('O salário é igual ou menor à {0}! Coloque um valor válido!')
        wage = document.querySelector('#wage').value
    } else if (increase <= 0) {
        alert('O aumento é igual ou menor à {0}! Coloque um valor válido!')
        document.querySelector('#increase').value
    } else {
        let $increase = wage * (increase / 100)

        let res = document.createElement('p')
        res.innerHTML = `O funcionário(a) <strong>${name}</strong> com salário <strong>R$${wage}</strong> vai receber um aumento de <strong>${$increase}</strong>, portanto o salário total vai ficar em <strong>R$${
            wage + $increase
        }</strong>.`
        let $res = document.querySelector('#res').appendChild(res)
    }
}
