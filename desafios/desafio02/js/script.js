let btn = document.querySelectorAll('button')[0]
btn.addEventListener('click', boasVindas)

function boasVindas() {
    let nome = prompt('Qual seu nome? ')
    let idade = prompt('Qual sua idade? ')
    if (nome == '' || idade == '') {
        alert('Preencha seu nome e sua idade!')
    } else {
        alert(`Acabei de conhecer ${nome} com idade de ${idade}!`)
    }
}