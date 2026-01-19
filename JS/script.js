
const inputs = document.querySelectorAll('.segmento')
const playBtn = document.getElementById('playBtn')
const resultado = document.querySelector('.resultado')
const triangleImg = document.querySelector('.triangleImg')

playBtn.addEventListener('click', () => {

    const segmentos = []
    inputs.forEach(input => {
        segmentos.push(Number(input.value))
    })

    const [a, b, c] = segmentos

    let result = document.createElement('p')
    resultado.innerHTML = ''

    resultado.appendChild(result)

    if (segmentos.some(n => n <= 0 || isNaN(n))) {
        result.innerHTML = `Revise seus valores!`
        triangleImg.src = './assets/errorTriangle.png'
        return
    }

    if (a >= b + c || b >= a + c || c >= a + b) {

        result.innerHTML = `
     <strong> Impossível formar um triângulo.</strong> <br>
Matematicamente, para três segmentos formarem <br>
um triângulo, o comprimento de cada lado deve ser 
<strong> menor <br> que a soma dos outros dois.</strong> 
     `
        triangleImg.src = './assets/errorTriangle.png'
      triangleImg.style.width = '300px'

    } else if ((a === b && b !== c) || (a === c && a !== b) || (b === c && b !== a)) {

        result.innerHTML = `
        Você formou o <strong>ISÓSCELES</strong>. <br> 
Triângulo formado por 2 segmentos de retas iguais e 1 diferente.
        `
        triangleImg.src = './assets/isosceles.svg'

    } else if ((a === b) && (b === c)) {
        result.innerHTML = `
        Você formou o <strong>Equilátero</strong>. <br> 
Triângulo formado por 3 segmentos de retas iguais.
        
        `
        triangleImg.src = './assets/equilatero.svg'
    } else {
        result.innerHTML = `
        Você formou o <strong>Escaleno</strong>. <br> 
Triângulo formado por 3 segmentos de retas diferentes.
        
        
        `
        triangleImg.src = './assets/escaleno.svg'
    }


})


