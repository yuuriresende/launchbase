//Criar um programa que calcula a média
//das notas entre alunos e envia
//mensagem do calculo da média.
//se a media for maior que 5, parabenizar a turma

const aluno01 = 'Joao'
const notaAluno01 = 9.8

const aluno02 = 'Maria'
const notaAluno02 = 10

const aluno03 = 'José'
const notaAluno03 = 8.5

const media = (notaAluno01 + notaAluno02 + notaAluno03)/3

//bloco de estrutura condicional
if (media > 5){
    console.log(`Parabens a todos, a nota foi de ${media}`)
}else{
    console.log('Infelizmente a media foi menor que 5')
}
