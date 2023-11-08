let tempo = new Date()
let horas = tempo.getHours()
let body = document.querySelector('body')
let tempoAtual = document.querySelector('main>p')
let imagem = document.querySelector('main>img')

tempoAtual.innerHTML = `Agora são ${horas} horas.`

if (horas <= 6) {
    imagem.setAttribute('src', '/img/pexels-pixabay-33545.jpg')
    imagem.setAttribute('alt', 'Boa manhã!')
    body.style.backgroundColor = '#646464'
} else if (horas <= 12) {
    imagem.setAttribute('src', '/img/pexels-lukas-296234.jpg')
    imagem.setAttribute('alt', 'Bom dia!')
    body.style.backgroundColor = '#3CB4FF'
} else if (horas <= 18) {
    imagem.setAttribute('src', '/img/pexels-anderson-martins-2386144.jpg')
    imagem.setAttribute('alt', 'Bom tarde!')
    body.style.backgroundColor = '#FF9B4B'
} else {
    imagem.setAttribute('src', '/img/pexels-alex-fu-3289156.jpg')
    imagem.setAttribute('alt', 'Bom noite!')
    body.style.backgroundColor = '#3C3C3C'
}
