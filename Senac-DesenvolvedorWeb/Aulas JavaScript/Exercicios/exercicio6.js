let valor1 = prompt("Insira o primeiro valor 1");
let valor2 = prompt("Insira o primeiro valor 2");
let valor3 = prompt("Insira o primeiro valor 3");
let valor4 = prompt("Insira o primeiro valor 4");
let valor5 = prompt("Insira o primeiro valor 5");

valor1= parseFloat(valor1);
valor2= parseFloat(valor2);
valor3= parseFloat(valor3);
valor4= parseFloat(valor4);
valor5= parseFloat(valor5);

let media = (valor1 + valor2 + valor3 + valor4 + valor5) / 5;

document.write("A média de " + valor1 + " + " + valor2 + " + " + valor3 + " + " + valor4 + " + " + valor5 + " é igual a " + media + ".");