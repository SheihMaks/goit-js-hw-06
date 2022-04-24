const refs = {
  input: document.querySelector("#name-input"),
  nameForAccost: document.querySelector("#name-output"),
};

const onEventInput = (event) => {
  refs.nameForAccost.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.nameForAccost.textContent = "Anonymous";
  }
};
refs.input.addEventListener("input", onEventInput);
