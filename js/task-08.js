const loginFormRef = document.querySelector(".login-form");

const onSubmitInput = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    window.alert("Все поля должны быть заполнены!");
    return;
  }
  const formData = new FormData(event.currentTarget);
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  event.currentTarget.reset();
};

loginFormRef.addEventListener("submit", onSubmitInput);
