/*
  6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.
*/
const prompt = require('prompt-sync')()

let num = parseInt(prompt('Adivinhe o número sorteado de 1 a 5? '))

if(isNaN(num)) return 

let randomNum = Math.floor(Math.random() * 5) + 1

console.log(`Seu número: ${num}`);
console.log(`Número que caiu: ${randomNum}`);