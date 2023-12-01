let btn = document.querySelector('#contar').addEventListener('click', Contador)

function Contador() {
    let res = document.querySelector('#resposta')
    let inicio = Number(document.querySelector('#Inicio__Input').value)
    let fim = Number(document.querySelector('#Fim__Input').value)
    let passo = Number(document.querySelector('#Passo__Input').value)
    res.innerHTML = ''

    if (inicio == 0 && fim == 0 || inicio == fim) {
        alert('Dados incompletos! Corrija para continuar.')
    } else {
        if (passo == 0) {
            alert('Passo [0]! Considere passo [1].')
            passo = 1
        }
    
        while (inicio < fim) {
            inicio += passo
            res.innerHTML += `${inicio}\u27A1 `
        }
        while (inicio > fim) {
            inicio -= passo
            res.innerHTML += `\u2B05${inicio}`
        }
    }
}
