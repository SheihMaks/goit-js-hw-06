const refs = {
  input: document.querySelector("#validation-input"),
};
console.dir(refs.input);
refs.input.classList.add("#validation-input");
const onValidationValue = (event) => {
  console.log(
    Number(event.currentTarget.getAttribute("data-length")) ===
      event.currentTarget.value.length
  );
  event.currentTarget.value.length ===
  Number(event.currentTarget.getAttribute("data-length"))
    ? event.currentTarget.classList.add("valid")
    : event.currentTarget.classList.add("invalid");
};
refs.input.addEventListener("blur", onValidationValue);
