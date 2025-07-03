const readline = require("readline-sync");

let querContinuar;

do {
  // Simula que a pessoa está jogando
  console.log("🎮 Você está jogando!");

  // Pergunta se quer continuar jogando
  querContinuar = readline.question("Quer continuar jogando pagando R$500,00? (s para pagar / qualquer outra tecla para sair): ").toLowerCase();

  if (querContinuar === "s") {
    console.log("💸 Pagamento feito. Continuando o jogo...");
    querContinuar = "p"; // Sinaliza que a pessoa quer continuar
  }

} while (querContinuar === "p");

console.log("👋 Você saiu do jogo!");