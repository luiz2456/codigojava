let msg = window.document.getElementById('msg')
let original = window.document.getElementById('original')
let desconto = window.document.getElementById('desconto')
valor_final = window.document.getElementById("valor_final")


function calculo(){
    let produto = window.prompt('Qual é o produto que você está comprando?')

    let custo = Number(window.prompt(`Qual o preço de ${produto}?`))

    let desconto1 = (custo * 10) / 100
    let valor_descontado = custo - desconto1

    msg.innerHTML = (`<h1>Calculando desconto de 10% para ${produto}</h1>`)

    original.innerHTML = (`O preço original era R$ ${custo}.`)
    desconto.innerHTML = (`<p> Você acaba de ganhar R$ ${desconto1} de desconto (10%).</p>`)
    valor_final.innerHTML = (`No fim você vai pagar R$ ${valor_descontado} no produto ${produto}.`)
}