let numeroJogador, numeroComputador;

numeroComputador = Math.floor(Math.random(0,1) * 10 + 1)

numeroJogador = prompt("Tente adivinhar o número");

if(numeroComputador == numeroJogador){
    document.write("Você ganhou!");
    document.write("<br>");
    document.write("<img src='sor.jpg'>");
}

else{
    document.write("Você perdeu!");
    document.write("<br>");
    document.write("<img src='sor2.jpg'>");
}
