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
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  event.currentTarget.reset();
  formData.forEach((value, name) => {
    console.log("name:", name);
    console.log("value:", value);
  });
};

loginFormRef.addEventListener("submit", onSubmitInput);
