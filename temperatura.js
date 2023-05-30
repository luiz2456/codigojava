let celsius = Number(window.prompt('Digite uma temperatura em °C (Celsius)'))
let tempcelsius = document.querySelector('#tempcelsius')

function conversor(){


    let msg = window.document.getElementById('msg')
    let msgk = window.document.getElementById('k')
    let msgf = window.document.getElementById('f')

    let kelvin = celsius + 273.15
    let fahrenheit = (celsius * 1.8) + 32

    medidaoriginal.innerHTML = `A temperatura de ${celsius}°C, corresponde a...`
    medida1.innerHTML = `${kelvin}°K (Kelvin)`
    medida2.innerHTML = `${fahrenheit}°F (Fahrenheit)`
}
