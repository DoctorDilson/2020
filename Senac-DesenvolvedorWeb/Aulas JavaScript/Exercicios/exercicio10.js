let numero1 = prompt("Informe um número")
let numero2 = prompt("Informe outro número")
let op = prompt("Insira o tipo de conta, sendo elas: Adição (+), Subtração (-), Multiplicação (*), Divisão (/)")


numero1= parseFloat(numero1);
numero2= parseFloat(numero2);

let Ad = numero1 + numero2;
let Su = numero1 - numero2;
let Mul = numero1 * numero2; 
let Div = numero1 / numero2;

if(op == "+"){
    document.write(Ad)
}else if(op == "-"){
    document.write(Su)
}else if(op == "*"){
    document.write(Mul)
}else if(op == "/"){
    document.write(Div)
}