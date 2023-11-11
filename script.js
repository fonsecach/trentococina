/* 
const form = document.getElementById("form");
const name = document.getElementById("nome");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

email.addEventListener("blur", () => {
  checkInputEmail();
});

nome.addEventListener("blur", () => {
  checkInputNome();
});

function checkInputNome(){
  const nomeValue = nome.value;

  if(nomeValue === ""){
    errorInput(nome, "Insira o nome completo!")
  }else{
    const formItem = nome.parentElement;
    formItem.className = "form-content"
  }
*/
