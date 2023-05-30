
let cotacaodia = Number(window.prompt('quanto está a cotação do dólar hoje? '))

function conversor(){
    let real = Number(window.prompt('Quantos reais você tem na sua carteira?'))

    let dolar = real / cotacaodia

    let mens = window.document.getElementById('mensagem')
    mens.innerHTML = `Você tem R$ ${real} na sua carteira. 
    Com R$ ${real} você consegue comprar $ ${dolar} dólares.`
}