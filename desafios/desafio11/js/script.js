let input = document
    .querySelector('input[type="submit"]')
    .addEventListener('click', isBissext)

function isBissext() {
    event.preventDefault()

    let year = Number(document.querySelector('#year').value)

    if (year % 4 == 0) {
        let $res = document.createTextNode(`O ano ${year} é um ano bissexto!`)
        let res = document.createElement('p')
        res.appendChild($res)
        let resD = document.querySelector('#res').appendChild(res)
    } else {
        let $res = document.createTextNode(
            `O ano ${year} não é um ano bissexto!`
        )
        let res = document.createElement('p')
        res.appendChild($res)
        let resD = document.querySelector('#res').appendChild(res)
    }
}
