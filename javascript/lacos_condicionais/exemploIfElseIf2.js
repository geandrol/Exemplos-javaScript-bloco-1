const readline = require("readline-sync");

let idade = readline.questionInt('Digite sua idade: ');

if(idade < 5){
 console.log(" Entrada grátis");
}else if(idade >= 5 && idade <= 12){
  console.log("Meia entrada");
}else if(idade >= 13 && idade <= 59){
  console.log("Ingresso normal");
}else{
      console.log("Meia entrada para idosos");
}