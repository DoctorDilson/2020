let numeroAleatorio = numeroComputador = Math.floor(Math.random(0,1) * 10 + 1);
let respostaUsuario;

for(let i = 1 ; i <= 3 ; i++){

    alert("Tentativa " + i );
    document.write("Tentativa " + i + "<br>");
    respostaUsuario = prompt("Informe um número entre 1 e 10");
    if(respostaUsuario == numeroAleatorio){
        document.write("<br>Parabéns! Você ganhou!<br><br>");
        break;
    }
    else{
        if(i == 3){
            document.write("<br> Que pena, você perdeu.<br><br>");
        }else if(respostaUsuario < numeroAleatorio){
            alert("Tente um número maior.")
        }else if(respostaUsuario > numeroAleatorio){
            alert("Tente um número menor.")
        }
    }
}

document.write("<br>Fim de jogo!");