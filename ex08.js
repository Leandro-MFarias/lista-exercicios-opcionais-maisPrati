/*
  8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
  podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
  sistema funciona assim:
  - até 10 h de atividade no mês: ganha 2 pontos por hora
  - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
  - acima de 20 h de atividade no mês: ganha 10 pontos por hora
  - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
  Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
  Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/
const prompt = require('prompt-sync')()

let horas = parseInt(prompt("Quantas horas de atividade você fez no mês: "))
if (isNaN(horas)) return console.log("Digite um numero valido");
if (horas === 0) return console.log("Zero pontos você não ganhou nada esse mês!");

let troca = 0.05
let pontos = 0

if (horas <= 10) {
  pontos = horas * 2;
} else if (horas <= 20) {
  pontos = horas * 5;
} else {
  pontos = horas * 10;
}

let ganhoTotal = pontos * troca

console.log(`Você fez atividade por ${horas}, recebeu: ${pontos} e ganhou um total de: ${ganhoTotal.toLocaleString("pt-BR", { style: "currency", currency: 'BRL' })}`);
