function realizarLogin() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("password").value;

  if (!email || !senha) {
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("erro_email").innerText = "Voce deve preencher o campo de email";

    document.getElementById("password").style.borderColor = "red";
    document.getElementById("erro_senha").innerText = "Voce deve preencher o campo de senha";
    return;
    
  } 
  
  if (email === "senai@gmail.com" && senha === "senai") {
    window.location.href = "./home.html";
  } else {
    alert("Email ou senha incorretos. Tente novamente.");
  }
}

function desbloquearSenha() {
  var tipo_atual = document.getElementById("password").type;
  
  if (tipo_atual === "text") {
    document.getElementById("password").type = "password";
  } else {
    document.getElementById("password").type = "text";
  }
}

