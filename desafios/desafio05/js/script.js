var m = document.querySelector('#meter')
let btn = document.querySelector('button')
btn.addEventListener('click', Calc)

function Calc() {
    if (m.value <= 0) {
        alert('Medida inválida!')
    } else {
        let result = document.querySelector('div:nth-child(2)')

        let km = m.value / 1000
        let hm = m.value / 100
        let dam = m.value / 10
        let dm = m.value * 10
        let cm = m.value * 100
        let mm = m.value * 1000
        result.innerHTML = `
        <p>A medida em <strong>KM</strong> é ${km}.</p>
        <p>A medida em <strong>HM</strong> é ${hm}.</p>
        <p>A medida em <strong>DAM</strong> é ${dam}.</p>
        <p>A medida em <strong>DM</strong> é ${dm}.</p>
        <p>A medida em <strong>CM</strong> é ${cm}.</p>
        <p>A medida em <strong>MM</strong> é ${mm}.</p>
        `
    }
}
