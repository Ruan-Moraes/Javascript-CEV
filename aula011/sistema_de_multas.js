let btn = document.querySelector("#multar");

btn.addEventListener("click", function() {
  let velocidade = document.querySelector('#velocidade')
  let multar = velocidade.value
  let resultado = document.querySelector('#Container__Resultado')
  if (multar > 60) {
    resultado.innerHTML = (`A velocidade foi de <strong>${multar}Km/h</strong> e você foi multado!`)
  } else {
    resultado.innerHTML = (`A velocidade foi de <strong>${multar}Km/h</strong> e você não foi multado!`)
  }
});
