let verificar = document.querySelector('#verificar')
verificar.addEventListener('click', Verificador)

function Verificador() {
    let image = document.querySelector('img')
    let respota = document.querySelector('#resposta')
    let $year = new Date()
    let year = $year.getFullYear()

    let anoNasc = document.querySelector('#anoNasc').value

    if (anoNasc > year) {
        alert('Data de nascimento inválida!')
        verificar()
    }

    let idade = year - anoNasc
    let sexo = document.querySelector('input[name="sexo"]:checked').value


    if (sexo == 'masculino') {
        if (idade >= 70) {
            respota.innerHTML = `Detectamos sexo <strong>${sexo}</strong> e com idade de <strong>${idade}</strong> anos.`
            image.setAttribute(
                'src',
                'img/Masculino/pexels-zaetaflow-sec-3205230 (1).jpg'
            )
            image.setAttribute('alt', 'Foto de idoso')
        } else if (idade >= 18) {
            respota.innerHTML = `Detectamos sexo <strong>${sexo}</strong> e com idade de <strong>${idade}</strong> anos.`
            image.setAttribute(
                'src',
                'img/Masculino/pexels-nathan-cowley-1300402.jpg'
            )
            image.setAttribute('alt', 'Foto de adulto')
        } else if (idade >= 12) {
            respota.innerHTML = `Detectamos sexo <strong>${sexo}</strong> e com idade de <strong>${idade}</strong> anos.`
            image.setAttribute('src', 'img/Masculino/pexels-pixabay-207582.jpg')
            image.setAttribute('alt', 'Foto de adolescente')
        } else if (idade >= 6) {
            respota.innerHTML = `Detectamos sexo <strong>${sexo}</strong> e com idade de <strong>${idade}</strong> anos.`
            image.setAttribute(
                'src',
                'img/Masculino/pexels-jalal-ahmed-18751505.jpg'
            )
            image.setAttribute('alt', 'Foto de criança')
        } else {
            respota.innerHTML = `Detectamos sexo <strong>${sexo}</strong> e com idade de <strong>${idade}</strong> anos.`
            image.setAttribute(
                'src',
                'img/Masculino/pexels-goda-morgan-18649745.jpg'
            )
            image.setAttribute('alt', 'Foto de bebê')
        }
    }
    if (sexo == 'feminino') {
        if (idade > 70) {
            respota.innerHTML = `Detectamos sexo <strong>${sexo}</strong> e com idade de <strong>${idade}</strong> anos.`
            image.setAttribute(
                'src',
                'img/Feminino/pexels-victor-l-2790438.jpg'
            )
            image.setAttribute('alt', 'Foto de idosa')
        } else if (idade >= 18) {
            respota.innerHTML = `Detectamos sexo <strong>${sexo}</strong> e com idade de <strong>${idade}</strong> anos.`
            image.setAttribute(
                'src',
                'img/Feminino/pexels-christina-morillo-1181686.jpg'
            )
            image.setAttribute('alt', 'Foto de adulta')
        } else if (idade >= 12) {
            respota.innerHTML = `Detectamos sexo <strong>${sexo}</strong> e com idade de <strong>${idade}</strong> anos.`
            image.setAttribute(
                'src',
                'img/Feminino/pexels-anastasiya-gepp-1462630.jpg'
            )
            image.setAttribute('alt', 'Foto de adolescente')
        } else if (idade >= 6) {
            respota.innerHTML = `Detectamos sexo <strong>${sexo}</strong> e com idade de <strong>${idade}</strong> anos.`
            image.setAttribute(
                'src',
                'img/Feminino/pexels-andrea-piacquadio-3755511.jpg'
            )
            image.setAttribute('alt', 'Foto de criança')
        } else {
            respota.innerHTML = `Detectamos sexo <strong>${sexo}</strong> e com idade de <strong>${idade}</strong> anos.`
            image.setAttribute(
                'src',
                'img/Feminino/pexels-debraj-maji-18782535.jpg'
            )
            image.setAttribute('alt', 'Foto de de bebê')
        }
    }
}
