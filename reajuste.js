let msg = window.document.getElementById('msg')
let salario = window.document.getElementById('salario')
let msg_porcentagem = window.document.getElementById('msg_porcentagem')
let reajustado = window.document.getElementById('reajustado')


function calculo() {

    let nome = window.prompt('Qual é o nome do funcionário?')

    let salario_prompt = Number(window.prompt(`Qual é o salário de ${nome}?`))

    let porcentagem = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    let reajuste = (salario_prompt * porcentagem) / 100

    
    let valor_reajustado = (salario_prompt + reajuste)





    if (reajustado > salario) {
        msg.innerHTML = `${nome} recebeu um aumento salarial!`
    }

    else {
        msg.innerHTML = `${nome} não teve seu salário alterado! `
    }

   
    salario.innerHTML = `O salário era R$ ${salario_prompt}`
    msg_porcentagem.innerHTML = `<p> Com um aumento de ${porcentagem}%, o salário vai aumentar R$ ${reajuste} no próximo mês. </p> `
    reajustado.innerHTML = `E a partir daí, ${nome} vai passar a ganhar R$ ${valor_reajustado}`



}