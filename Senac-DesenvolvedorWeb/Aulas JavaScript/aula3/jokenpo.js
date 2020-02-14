let nomeJogador1, nomeJogador2;
let opcaoJogador1, opcaoJogador2;

nomeJogador1 = prompt("Informe o nome do Jogador 1:");
opcaoJogador1 = prompt("Olá " + nomeJogador1 + ", escolha uma das opções: \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura");

nomeJogador2 = prompt("Informe o nome do Jogador 2:");
opcaoJogador2 = prompt("Olá " + nomeJogador2 + ", escolha uma das opções: \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura");

if(opcaoJogador1 == opcaoJogador2){
    document.write("<img src='jokenpo.jpg'>");
    document.write("<br>");
    document.write("EMPATE");
    document.write("<br>");
    document.write("<img src='empate.jpg'>");
}

else if(opcaoJogador1 == 1 && opcaoJogador2 == 3){
    document.write("<img src='jokenpo.jpg'>");
    document.write("<br>");
    document.write( nomeJogador1 + " venceu!");
    document.write("<br>");
    document.write("<img src='pedra.jpg'>");
}

else if(opcaoJogador1 == 2 && opcaoJogador2 == 1){
    document.write("<img src='jokenpo.jpg'>");
    document.write("<br>");
    document.write( nomeJogador1 + " venceu!")
    document.write("<br>");
    document.write("<img src='papel.jpg'>");
}

else if(opcaoJogador1 == 3 && opcaoJogador2 == 2){
    document.write("<img src='jokenpo.jpg'>");
    document.write("<br>");
    document.write( nomeJogador1 + " venceu!")
    document.write("<br>");
    document.write("<img src='tesoura.jpg'>");
}

else if(opcaoJogador2 == 1 && opcaoJogador1 == 3){
    document.write("<img src='jokenpo.jpg'>");
    document.write("<br>");
    document.write( nomeJogador2 + " venceu!")
    document.write("<br>");
    document.write("<img src='pedra.jpg'>");
}

else if(opcaoJogador2 == 2 && opcaoJogador1 == 1){
    document.write("<img src='jokenpo.jpg'>");
    document.write("<br>");
    document.write( nomeJogador2 + " venceu!")
    document.write("<br>");
    document.write("<img src='papel.jpg'>");
}

else if(opcaoJogador2 == 3 && opcaoJogador1 == 2){
    document.write("<img src='jokenpo.jpg'>");
    document.write("<br>");
    document.write( nomeJogador2 + " venceu!")
    document.write("<br>");
    document.write("<img src='tesoura.jpg'>");
}