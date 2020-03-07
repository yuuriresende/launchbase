const nome = 'Yuri'
const peso = 67
const altura = 1.70
const sexo = 'M'

const imc = peso / (altura * altura)

if ( imc >= 30 ){
    console.log('Yuri voce esta acima do peso')
} else {
    console.log('Yuri voce nao esta acima do peso')
}
