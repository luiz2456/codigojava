var analise = window.document.getElementById('analise')
var msg_media = window.document.getElementById('msg_media')
var conclusao = window.document.getElementById('conclusao')


function situacao(){
    let nome = window.prompt("Qual é o seu nome? ")
    let nota1 = Number(window.prompt(`A primeira nota de ${nome}: `))
    let nota2 = Number(window.prompt(`A segunda nota de ${nome}: `))
    
    analise.innerHTML = `<h3> Analisando a situação de ${nome}  </h3>`

    let media = (nota1 + nota2 ) /2


    msg_media.innerHTML = (`com as notas ${nota1} e ${nota2}, <strong> a média é ${media} </strong>`)


    if (media<3)
    {
         conclusao.innerHTML = `Com média abaixo de 3.0, o aluno está <strong id = "reprovado"> Reprovado </strong>`
      }


    else if  ( media>=3 && media<=6){
         conclusao.innerHTML = `Com média entre 3.0 e 6.0 , o aluno está de <strong id = "recuperacao"> Recuperação </strong>`
    }

     else {
         conclusao.innerHTML = `Com média acima de 6.0,  o aluno está <strong id = "aprovado"> Aprovado </strong> `
    }
}
