let diaSemana, dia;
diaSemana = prompt("Escolha o dia da semana: \n1-Domingo\n2-Segunda\n3-Terça\n4-Quarta\n5-Quinta\n6-Sexta\n7-Sábado");

switch (diaSemana) {
    case "1":
        dia = "Domingo";
        document.write("O dia da semana escolhido foi " + dia);
        break;
    case "2":
        dia = "Segunda";
        document.write("O dia da semana escolhido foi " + dia);
        break;
    case "3":
        dia = "Terça";
        document.write("O dia da semana escolhido foi " + dia);
        break;
    case "4":
        dia = "Quarta";
        document.write("O dia da semana escolhido foi " + dia);
        break;
    case "5":
        dia = "Quinta";
        document.write("O dia da semana escolhido foi " + dia);
        break;
    case "6":
        dia = "Sexta";
        document.write("O dia da semana escolhido foi " + dia);
        break;
    case "7":
        dia = "Sábado";
        document.write("O dia da semana escolhido foi " + dia);
        break;
    default:
        dia = "Resposta inválida";
        document.write( dia);
        break;
}

//TERMÁRIO
/*

if(idade >= 18){
    resposta = "maior de idade";
}else{
    resposta = "menor de idade";
}
*/

let nome, idade, repetir = "sim";

while(repetir == "sim" || repetir == "Sim" || repetir == "SIM" || repetir == "sIM" || repetir == "sIm" || repetir == "SiM" || repetir == "siM" || repetir == "SIm" || repetir == "s" || repetir == "ss"){

    nome = prompt("Informe seu nome:");
    idade = prompt("Informe sua idade:");
    resposta = (idade >= 18) ?  "Maior" : "menor";
    document.write("<br><br>Olá " + nome + ", você é " + resposta + " de idade.");
    
    repetir = prompt("Deseja repetir? sim ou não?");

}