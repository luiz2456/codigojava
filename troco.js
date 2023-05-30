function troco(){
   let produto = window.prompt("Qual produto você está comprando? ")
  let preco = Number(window.prompt(`Quanto custa ${produto} que você está comprando? `))
  let pagamento = Number(window.prompt(`Qual valor você deu para pagar ${produto} ? `))

  calculo = pagamento-preco
  window.alert(`Você comprou ${produto} que custa R$${preco}.
deu R$${pagamento} em dinheiro e vai receber R${calculo} de troco
volte sempre!`)
}

