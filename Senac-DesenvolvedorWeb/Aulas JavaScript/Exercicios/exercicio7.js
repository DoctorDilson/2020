let CF = prompt("Custo de fábrica")
let PD = 28 / 100;
let PI = 45 / 100;

CF= parseFloat(CF);

let X = CF * PD;
let Y = CF * PI

let CT = CF + X + Y

document.write( "O custo final é de " + CT )