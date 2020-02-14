let C = prompt("Insira capital");
let i = prompt("Insira a taxa de empréstimo (apenas o numero)");
let n = prompt("Insira o período do emprestimo");

let ip = i / 100;

let J = C * ip * n

document.write("O preço do juros é de " + J + " reais." )