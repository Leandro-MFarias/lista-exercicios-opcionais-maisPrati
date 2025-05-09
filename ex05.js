// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
const prompt = require('prompt-sync')()

let joken = ['pedra', 'papel', 'tesoura']

let numRandom = Math.floor(Math.random() * 3)
let maquina = joken[numRandom]

let escolha = prompt("Escreva Pedra, Papel ou Tesoura: ").toLowerCase()
if (!joken.includes(escolha)) {
  console.log("Escolha entre: pedra, papel ou tesoura.");
}

console.log(`Você escolheu ${escolha}`);
console.log(`Maquina escolheu ${maquina}`);

const ganhaDe = {
  pedra: 'tesoura',
  tesoura: 'papel',
  papel: 'pedra'
}

if (escolha === maquina) {
  console.log("Empate");
} else if (ganhaDe[escolha] === maquina) {
  console.log('Você Ganhou!');
} else {
  console.log("Você perdeu");
}