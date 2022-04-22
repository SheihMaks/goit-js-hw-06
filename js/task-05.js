const refs = {
  input: document.querySelector("#name-input"),
  nameForAccost: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onEventInput);

function onEventInput(event) {
  refs.nameForAccost.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.nameForAccost.textContent = "Anonymous";
  }
}
