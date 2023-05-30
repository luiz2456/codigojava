
let equacao = window.document.getElementById('equacao')
let delta = window.document.getElementById('delta')
let calculo = window.document.getElementById('calculo')


function clicar() {
let a = Number(window.prompt('Digite o coeficiente a:'))
let b = Number(window.prompt('Digite o coeficiente b:'))
let c = Number(window.prompt('Digite o coeficiente c:'))

let resultado = b ** 2 - 4 * a * c

equacao.innerHTML = (`A equação do segundo grau é <strong>${a}x² + ${b}x + ${c} = 0</strong>`)
delta.innerHTML = (`O cálculo de delta a ser realizado é  <strong>Δ = ${b}² - 4 .${a} . ${c}</strong>`)
calculo.innerHTML = (`o resultado de delta é  <strong>Δ = ${resultado}</strong>`)
}
