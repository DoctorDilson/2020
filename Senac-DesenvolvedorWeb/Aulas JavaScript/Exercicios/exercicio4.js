let valor1 = prompt("Insira o primeiro valor 1")
let valor2 = prompt("Insira o primeiro valor 2")
let valor3 = prompt("Insira o primeiro valor 3")

valor1= parseFloat(valor1);
valor2= parseFloat(valor2);
valor3= parseFloat(valor3);

let media = (valor1 + valor2 + valor3) / 3;


document.write("A média de " + valor1 + " + " + valor2 + " + " + valor3 + " é igual a " + media + ".");