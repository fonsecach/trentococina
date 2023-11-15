const form = document.getElementById("form");
const nome = document.getElementById("nome");
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

function checkInputNome() {
  const nomeValue = nome.value;

  if (nomeValue === "") {
    errorInput(nome, "Insira o nome completo!");
  } else {
    const formItem = nome.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "O email é obrigatório.");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 12) {
    errorInput(password, "A senha precisa ter no mínimo 12 caracteres.");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.");
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content";
  }
}

function checkForm() {
  checkInputNome();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    alert("CADASTRADO COM SUCESSO!");
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.className = "form-content error";
}
