let S = prompt("Insira o salário");
let R = prompt("Insira o reajuste (apenas o numero)");

let Rp = R / 100;

let Sr = S * Rp;

Sr= parseFloat(Sr);
S= parseFloat(S);

let To = Sr + S;

document.write("O reajuste aumenta seu salário em " + Sr + " reais, sendo agora de " + To + " reais." )

console.log(typeof(Sr));
console.log(typeof(S));