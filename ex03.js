/*
  3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
  Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
  R$ 0.45 para viagens mais longas. 
*/
const prompt = require("prompt-sync")();

let distance = parseInt(
  prompt("Qual a distância que você vai percorrer em km? ")
);

if (isNaN(distance)) return;

function ticketPrice(km) {
  let priceKm = km < 200 ? 0.5 : 0.45;
  let total = km * priceKm;

  console.log(
    "Você deve pagar: ",
    total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  );
}

ticketPrice(distance);
