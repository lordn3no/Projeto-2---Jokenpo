const prompt = require('prompt-sync')();
console.clear();

let a = "pedra";
let b = "papel";
let c = "tesoura";

let player_name = 0

let rodadas = 0;

let playwin = 0;
let pcwin = 0;

let final_choice = "sim";

let choices = [a, b, c];

while (final_choice === "sim"){

console.log("Seja bem vindo ao Jokenpô do Neno! As regras continuam as mesmas, e você só tem que decidir quantas rodadas quer jogar!\nNão se esqueça, PEDRA ganha de TESOURA, TESOURA ganha de PAPEL, e PAPEL ganha de PEDRA!");
console.log();
player_name = prompt("Insira seu nome: ");
console.log();

rodadas = prompt("Insira o número de rodadas que deseja jogar: ");
   let isnum = /^\d+$/.test(rodadas);

while (!isnum) {
  console.log("Você não inseriu um número. Tente novamente.")
  rodadas = prompt("Insira o número de rodadas que deseja jogar: ");
  isnum = /^\d+$/.test(rodadas);  
  }


for (let i = 0; i < rodadas; i++){

  let player_choice = prompt("Insira sua escolha: ").toLowerCase();

      while (player_choice !== "pedra" && player_choice !== "papel" && player_choice !== "tesoura"){
      console.log("O termo inserido não bate com o que foi pedido. Tente novamente");
      console.log();
      player_choice = prompt("Insira sua escolha: ").toLowerCase();
    }
    
  let pc_choice = choices[Math.floor(Math.random() * choices.length)];

  console.log("A sua escolha foi " + player_choice + " e a do computador foi " + pc_choice + "!");
  
  while (player_choice == pc_choice){

    console.log("Você empatou. Tente de novo!");
    console.log();
    player_choice = prompt("Insira sua escolha: ").toLowerCase();
    pc_choice = choices[Math.floor(Math.random() * choices.length)];
    
    
    while (player_choice !== "pedra" && player_choice !== "papel" && player_choice !== "tesoura"){
      console.log("O termo inserido não bate com o que foi pedido. Tente novamente");
      console.log();
      player_choice = prompt("Insira sua escolha: ").toLowerCase();
    }
    console.log("A sua escolha foi " + player_choice + " e a do computador foi " + pc_choice + "!");
  }

  if (player_choice == "pedra" && pc_choice == "tesoura"){
    console.log("O jogador ganhou!");
    console.log();
    playwin++;
  }

  else if (player_choice == "pedra" && pc_choice == "papel"){
    console.log("O computador ganhou!");
    console.log();
    pcwin++;
  }

  else if (player_choice == "tesoura" && pc_choice == "papel"){
    console.log("O jogador ganhou!");
    console.log();
    playwin++;
  }

  else if (player_choice == "tesoura" && pc_choice == "pedra"){
    console.log("O computador ganhou!");
    console.log();
    pcwin++;
  }
  
  else if (player_choice == "papel" && pc_choice == "pedra"){
    console.log("O jogador ganhou!");
    console.log();
    playwin++;
  }

  else if (player_choice == "papel" && pc_choice == "tesoura"){
    console.log("O computador ganhou!");
    console.log();
    pcwin++;
  } 
 }

 console.log("Você ganhou " + playwin + " turnos, e o computador ganhou " + pcwin + " turnos!");

 if (playwin > pcwin){
   console.log("Você é o grande vencedor!");
   console.log();
 } 
 else if (playwin < pcwin){
   console.log("Você perdeu!");
   console.log();
 }
 else if (playwin == pcwin){
   console.log("vocês empataram!");
   console.log();
 }
final_choice = prompt("Deseja jogar de novo? ").toLowerCase();
 while (final_choice !== "sim" && final_choice !== "nao" ){
   console.log("Insira uma resposta válida!");
   console.log();
   final_choice = prompt("Deseja jogar de novo?(Sim/Nao) ").toLowerCase();
 } if (final_choice === "nao"){
   console.log("Obrigado por jogar!");
   console.log();
 }
}


