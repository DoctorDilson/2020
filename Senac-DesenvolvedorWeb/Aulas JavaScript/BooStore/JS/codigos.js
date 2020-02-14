function Login(event) {
    event.preventDefault();
    var usuario = document.getElementsByName('username')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
    senha = senha.toLowerCase();
  
    if (usuario == "dilson" && senha == "dilson") {
      alert("dados corretos");
      window.location = "#";
    }else{
      alert("Dados incorretos, tente novamente");
    }
  }