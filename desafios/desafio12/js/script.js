const btn = document
    .querySelector('input[type="submit"]')
    .addEventListener('click', verificar)

let title = true

let content = document.querySelector('#content')

function verificar() {
    event.preventDefault()

    let oldValue = document.querySelector('#oldValue')
    let newValue = document.querySelector('#newValue')

    let $oldValue = Number(oldValue.value)
    let $newValue = Number(newValue.value)

    if ($oldValue == '') {
        alert('Digite um valor válido no input[1]!')
        oldValue.style.transition = '.5s linear'
        oldValue.style.backgroundColor = 'rgba(140, 100, 100, 0.1)'
        setTimeout(() => {
            oldValue.style.backgroundColor = 'rgb(255, 255, 255)'
        }, 2000)
    } else if ($newValue == '') {
        alert('Digite um valor válido no input[2]!')
        newValue.style.transition = '.5s linear'
        newValue.style.backgroundColor = 'rgba(140, 100, 100, 0.1)'
        setTimeout(() => {
            newValue.style.backgroundColor = 'rgb(255, 255, 255)'
        }, 2000)
    }

    const h1 = document.createElement('h1')
    h1.innerText = 'Analisando os valores informados...'
    if (title == true) {
        content.appendChild(h1)
        title = false
    }

    let beforeAndAfter = document.createElement('p')
    beforeAndAfter.innerHTML = `O produto custava <strong>${new Intl.NumberFormat(
        'pt-BR',
        {
            style: 'currency',
            currency: 'BRL',
        }
    ).format($oldValue)}</strong> e agora custa <strong>${$newValue}</strong>.`
    content.appendChild(beforeAndAfter)

    let itsCheaperOrMoreExpensive = document.createElement('p')
    itsCheaperOrMoreExpensive.innerHTML =
        $oldValue < $newValue
            ? 'Hoje o produto está mais <strong>caro</strong>.'
            : 'Hoje o produto está mais <strong>barato</strong>.'
    content.appendChild(itsCheaperOrMoreExpensive)

    let relationshipBetweenValues = document.createElement('p')
    relationshipBetweenValues.innerHTML =
        $oldValue < $newValue
            ? `O preço subiu <strong>${new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
              }).format($newValue - $oldValue)}</strong>.`
            : `O preço caiu <strong>${new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
              }).format($oldValue - $newValue)}</strong>.`
    content.appendChild(relationshipBetweenValues)

    let $def = ($newValue / $oldValue - 1) * 100
    let variation = document.createElement('p')
    variation.innerHTML =
        $oldValue < $newValue
            ? `Uma variação de <strong>${$def
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}%</strong> pra cima.`
            : `Uma variação de <strong>${$def
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}%</strong> pra baixo.`
    content.appendChild(variation)
}
