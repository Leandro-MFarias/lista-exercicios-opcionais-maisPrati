/*
  Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
*/
const prompt = require("prompt-sync")();

function triagem() {
  let homens = []
  let mulheres = []
  let salarioHomens = 0
  let salarioMulheres = 0

  while (true) {
    let sexo = prompt("Digite seu Sexo (Homem | Mulher): ").toLowerCase()
    if (sexo !== 'homem' && sexo !== 'mulher') return console.log('Digite um sexo valido');

    let salario = parseFloat(prompt("Digite seu salário: "));
    if (isNaN(salario)) return console.log("Digite um salario valido");
    
    if (sexo === 'homem') {
      homens.push({sexo, salario})
    } else {
      mulheres.push({ sexo, salario })
    }
  
    let continuar = prompt("Quer adicionar mais um funcionario? (S/N)").toLowerCase()
    if (continuar !== 's') break
  }

  for (let homem of homens) {
    salarioHomens += homem.salario
  }
  for (let mulher of mulheres) {
    salarioMulheres += mulher.salario
  }

  // salarioHomens = homens.reduce((acc, curr) => acc + curr.salario, 0)
  // salarioMulheres = mulheres.reduce((acc, curr) => acc + curr.salario, 0)

  console.log(homens, mulheres);
  console.log("\nTotal dos Salários dos Homens: ", salarioHomens, "\nTotal dos Salários das Mulheres: ", salarioMulheres);
}

triagem()