// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')()

let cigarrosDia = parseInt(prompt("Numero de cigarros que consome no dia? "))
let anosFumando = parseInt(prompt("Quantos anos você fuma? "))

if (isNaN(cigarrosDia) || isNaN(anosFumando) ) return console.log('Digite um número válido');

function reductionOfLife(cigarrosDia, anosFumado) {
  let minutosPorDia = cigarrosDia * 10
  let diasFumados = anosFumado * 365

  const totalMinutosPerdidos = minutosPorDia * diasFumados
  const horasPerdidas = totalMinutosPerdidos / 60
  const diasPerdido = horasPerdidas / 24

  console.log(Math.round(horasPerdidas));
  console.log(Math.round(diasPerdido));
}

reductionOfLife(cigarrosDia, anosFumando)