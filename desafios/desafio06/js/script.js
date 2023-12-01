var btn = document.querySelector('div>button')
btn.addEventListener('click', Converter)
var TempKP = document.createElement('p')
var TempFP = document.createElement('p')

function Converter() {
    let tempC = Number(prompt('Digite a temperatura em C° (Celsius)'))
    let tempK = tempC + 273
    let tempF = 1.8 * tempC + 32

    let res = document.querySelector('#res')

    res.appendChild(TempFP)
    res.appendChild(TempKP)
    TempKP.innerHTML = `A temperatura ${tempC}°C em Kelvin (K) é: <span>${tempK}</span>`
    TempFP.innerHTML = `A temperatura ${tempC}°C em Fahrenheit (ºF) é: <span>${tempF}</span>`
}
