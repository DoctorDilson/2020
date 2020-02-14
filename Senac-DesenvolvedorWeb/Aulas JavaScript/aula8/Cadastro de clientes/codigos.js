function Cadastrar(){
    let nome, telefone, email;

    nome= document.querySelector("#nome").value;
    telefone= document.querySelector("#telefone").value;
    email= document.querySelector("#email").value;

    linhaCliente = "<tr>" + "<td>" + nome + "</td>" + "<td>" + telefone + "</td>" + "<td>" + email + "</td>";

    document.querySelector(".lista-clientes").innerHTML += linhaCliente;

    LimparC();

    document.querySelector(".mensagem").innerHTML = "<em>Cliente cadastrado com sucesso</em>";
}

function LimparC(){
        document.querySelector("#nome").value = "";
        document.querySelector("#telefone").value = "";
        document.querySelector("#email").value = "";
}