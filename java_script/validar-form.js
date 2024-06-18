// ---------- VALIDAÇÃO USERNAME ---------- //
const nomeInput = document.getElementById("nome");
const nomeLabel = document.querySelector("label[for='nome']");
const nomeHelper = document.getElementById("nome-helper");

function mostrarPopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}
mostrarPopup(nomeInput, nomeLabel);

// Validar valor do input
nomeInput.addEventListener("change", (evento) => {
  let valorInput = evento.target.value;
  console.log(valorInput.length);

  if (valorInput.length < 7) {
    // Valor
    console.log("Informe ao menos um Sobrenome.");
    nomeInput.classList.add("error");
    nomeHelper.classList.add("visible");
    nomeInput.classList.remove("correct");
    nomeHelper.innerText = "Informe ao menos um Sobrenome.";
  } else {
    // Valor correto
    console.log("Correto");
    nomeInput.classList.add("correct");
    nomeHelper.classList.remove("visible");
  }
});



// ---------- VALIDAÇÃO EMAIL ---------- //
const emailInput = document.getElementById("email");
const emailHelper = document.getElementById("email-helper");
const emailLabel = document.querySelector("label[for='email']");

console.log(emailHelper, emailInput, emailLabel);

mostrarPopup(emailInput, emailLabel);

// validar valor do email
emailInput.addEventListener("change", (e) => {
  const valorInput = e.target.value;

  if (valorInput.includes("@") && valorInput.includes(".com")) {
    // valor correto
    console.log("Valor Correto!")
    emailInput.classList.add("correct")
    emailHelper.classList.remove("visible")
  } else {
    // valor incorreto
    console.log("o email deve conter @ e .com");

    emailInput.classList.add("error")
    emailHelper.classList.add("visible")
    emailInput.classList.remove("correct")
    emailHelper.innerText = "O email deve conter @ e .com";
  }
});


// ---------Máscara para telefone---------//
const campoContato = document.getElementById("contato");

campoContato.addEventListener('keyup', mascaraTelefone); //aciona quando o usuario pressiona e solta a tecla

function mascaraTelefone(e){

  const tecla = e.keyCode; //captura tecla

  if(tecla == 8){
    return false;
  }

  const telefone = campoContato.value

  if(telefone.length == 1){
    campoContato.value = "(" + telefone
    return true;
  }

  if(telefone.length == 3){
    campoContato.value = telefone + ")"
    return true;
  }
  
  if(telefone.length == 9){
    campoContato.value = telefone + "-"
    return true;
  }

};
