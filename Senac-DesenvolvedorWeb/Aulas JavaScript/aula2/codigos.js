//Essa noite eu vou jogar WoW rçrç
/* alert("Seja bem-vindo");
   alert("Ou nem tanto assim, só entra ai"); */
document.write("Aprenda JavaScript");
console.log("Recado para o desenvolvedor");

let nome , idade;

nome = "WoW";
idade = "15"

console.log("nome: " + nome);
console.log(idade);

 //operações arotiméticas
console.log("10+2=" + (10+2));
console.log("10-2=" + (10-2));
console.log("10*2=" + (10*2)); //multiplicação
console.log("10/2=" + (10/2)); //divisão
console.log("10%2=" + (10%2)); //resto da divisão

//operações relacionais
console.log("10>2=" + (10>2)); //maior
console.log("10<2=" + (10<2)); //menor
console.log("10==2=" + (10==2)); //igualdade
console.log("10!=2=" + (10!=2)); //diferente
console.log("10>=2=" + (10>=2)); //maior ou igual
console.log("10<=2=" + (10<=2)); //menor ou igual

//operadores lógicos
console.log("(20<2) && (5==5)" + ((20<2) && (5==5)) ); //operador E
console.log("20<2) || (5==5)=" + ((20<2) || (5==5)) ); //operador Ou
console.log("!(5==5)=" + !(5==5) ); //operador Não

let numero1 = prompt("Informe um número")
let numero2 = prompt("Informe outro número")

numero1= parseFloat(numero1);
numero2= parseFloat(numero2);

console.log(total);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 + numero2);

console.log(typeof(numero1));
console.log(typeof(numero2));

let nota1 = 7;
let nota2 = 8.5;
let nota3 = 4.5;
let nota4 = 6;
let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("A média do João é " + media);