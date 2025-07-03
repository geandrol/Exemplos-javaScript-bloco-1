const readline = require("readline-sync");

// for(let i = 10; i >= 1; i-- ){
//     console.log(`Número: ${i}`);
// }


let bomba = readline.question("Não digite (s): ").toLowerCase(); 
if(bomba === "s") {

for (let i = 10; i >= 0; i++) {
  setTimeout(() => {
    if ( i === 2){
        console.log(`Contagem: ${i}  vai restar 6 das 7 vidas!`);
    } else if 
        (i > 0) {
      console.log("Contagem: " + i);
    } else {
      console.log("💥 BOOM!");
    }
  }, (10 - i) * 1000); // espera 1 segundo por número
} 

}else{
    console.log("Por não ser curioso você se manteve vivo!");
}