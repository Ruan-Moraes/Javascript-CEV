let input = document
    .querySelector('input[type="submit"]')
    .addEventListener('click', Bhaskara)

function Bhaskara() {
    event.preventDefault()

    let a = Number(document.querySelector('#a').value)
    let b = Number(document.querySelector('#b').value)
    let c = Number(document.querySelector('#c').value)

    // Não é 100% precisa!

    if (Math.sign(a) == -1 || Math.sign(c) == -1) {
        var Δ = b ** 2 + Math.abs(4) * a * Math.abs(c)
    } else {
        var Δ = b ** 2 - 4 * a * Math.abs(c)
    }

    // Caso fosse continuar a conta
    // let bhaskara = (-b + Math.sqrt(Δ)) / (2 * a)
    // let $bhaskara = (-b - Math.sqrt(Δ)) / (2 * a)
    // console.log(bhaskara)
    // console.log($bhaskara)

    let res = document.createElement('p')
    res.innerHTML = `A equação atual é: <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong> <br>
    O cálculo realizado será: <strong>Δ = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong> <br>
    O valor calculado foi: <strong>Δ = ${Δ}</strong>`
    let $res = document.querySelector('#res').appendChild(res)
}
