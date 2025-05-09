/*
  4. Crie um programa que leia o tamanho de três segmentos de reta.Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
*/

let reta1 = 10
let reta2 = 30
let reta3 = 20

if (reta1 <= reta2 + reta3 && reta2 <= reta1 + reta3 && reta3 <= reta1 + reta2) {
  console.log('É possivel formar um triângulo!');
} else {
  console.log('Não é possivel formar um triângulo');
}