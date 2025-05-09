/*
  2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Kmh-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/
const prompt = require('prompt-sync')()

let velocidade =  parseInt(prompt("Sua velocidade? "))
let multa = 0

if (isNaN(velocidade)) return

function checagem(vel) {
  if (vel > 80) {
    multa = (vel - 80) * 5
    console.log(`Você foi multado em ${multa.toLocaleString('pt-BR', {style: 'currency', currency: "BRL"})}`);
  } else {
    console.log('Dentro do limite');
  }
}

checagem(velocidade)