const readline = require("readline-sync");

console.log("########### Menu ##########");
console.log("#######Opção 1 - Cor fria ##########");
console.log("#######Opção 2 - Cor quente ########");
let opcao = readline.questionInt("Digite o numero: ");

switch (opcao) {
  case 1:
    console.log(" Cor fria");
    break;
  case 2:
    console.log(" Cor quente");
    break;
  default:
    console.log("Opção invalida!");
}
