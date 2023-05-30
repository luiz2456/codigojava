function conversor(){

    let valor = window.document.getElementById("valor")
        let km = window.document.getElementById('quilometro')
        let hecto = window.document.getElementById('hectomero')
        let decam = window.document.getElementById('decametro')
        let decil = window.document.getElementById('decimetro')
        let cm = window.document.getElementById('centimetro')
        let mil = window.document.getElementById('milimetro')

        let num = Number(window.prompt('Digite uma distância em metros (m):'))

        
    let quilometro = num / 1000
    let hectare = num / 100
    let decametro = num / 10
    let decimetro = num * 10
    let centimetro = num * 100
    let milimetro = num * 1000

    valor.innerHTML = (`A distância de ${num} metros, corresponde a: `)
    km.innerHTML = (`${quilometro} quilômetros (km)`)
    hecto.innerHTML = (`${hectare} hectômetros (Hm)`)
    decam.innerHTML = (`${decametro} decâmetros (Dam)`)
    decil.innerHTML = (`${decimetro} decímetros (dm)`)
    cm.innerHTML = (`${centimetro} centímetros (cm)`)
    mil.innerHTML = (`${milimetro} milímetros (mm)`)

}