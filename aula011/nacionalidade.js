var submit = document.getElementById('submit')

submit.addEventListener('click', nacionalidade)

function nacionalidade() {

    var country = document.getElementById('country')
    var countryV = country.value
    var resultado = document.getElementById('sua_Nacionalidade')

    if (countryV == 'Brasil') {
        resultado.innerHTML = 'Brasileiro'
        resultado.style.color = 'yellow'
    } else {
        resultado.innerHTML = 'Estrangeiro'
    }

}