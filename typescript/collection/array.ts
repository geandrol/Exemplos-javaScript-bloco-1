import ler = require("readline-sync");

const list: Array<number> = new Array<number>(12,75);

console.log("Coloque um numero na lita")
list.push(ler.questionInt())

console.log(list);

console.table(list);

list.pop();

console.table(list);

list.reverse();

console.table(list);

list.forEach(num => 
   console.log(num)
)

// function busca(num){
// console.log(num)
// }