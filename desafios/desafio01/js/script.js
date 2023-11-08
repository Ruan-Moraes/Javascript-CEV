let btn1 = document.querySelector('button:nth-child(1)')
let btn2 = document.querySelector('button:nth-child(2)')
let btn3 = document.querySelector('button:nth-child(3)')
btn1.addEventListener('click', botao1)
btn2.addEventListener('click', botao2)
btn3.addEventListener('click', botao3)

function botao1() {
    alert('você clicou no botão 1!')
}
function botao2() {
    alert('você clicou no botão 2!')
}
function botao3() {
    alert('você clicou no botão 3!')
}
