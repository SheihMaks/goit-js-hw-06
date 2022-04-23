const inputRef = document.querySelector("#validation-input");

inputRef.classList.add("#validation-input");
const onValidationValue = (event) => {
  event.currentTarget.classList.remove("invalid");
  event.currentTarget.value.length ===
  Number(event.currentTarget.getAttribute("data-length"))
    ? event.currentTarget.classList.add("valid")
    : event.currentTarget.classList.add("invalid");
};
inputRef.addEventListener("blur", onValidationValue);
