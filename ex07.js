/*
  7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
  carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. 
  Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
  mostre o preço a ser pago de acordo com os dados a seguir:
  Carros populares
  - Até 100 Km percorridos: R$ 0,20 por Km
  - Acima de 100 Km percorridos: R$ 0,10 por Km
  Carros de luxo
  - Até 200 Km percorridos: R$ 0,30 por Km
  - Acima de 200 Km percorridos: R$ 0,25 por Km
*/
const prompt = require("prompt-sync")();

const carroPopular = 90.0;
const carroLuxo = 150.0;
let precoDia = 0;
let kmTotal = 0;

let tipo = prompt(
  "Escolha o tipo de carro para alugar: Popular ou Luxo? "
).toLowerCase();
let dias = parseInt(prompt("Quantos dias vai alugar? "));
let kmPercorridos = parseFloat(prompt("Quantos Km você percorreu? "));

if (isNaN(dias) || isNaN(kmPercorridos))
  return console.log("Digite um dia ou km válido");

if (tipo === "popular") {
  precoDia = carroPopular;
  kmTotal = kmPercorridos < 100 ? kmPercorridos * 0.2 : kmPercorridos * 0.1;
} else if (tipo === "luxo") {
  precoDia = carroLuxo;
  kmTotal = kmPercorridos < 200 ? kmPercorridos * 0.3 : kmPercorridos * 0.25;
}

let total = (precoDia * dias) + kmTotal;

console.log(
  `Você deve pagar: ${total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`
);
