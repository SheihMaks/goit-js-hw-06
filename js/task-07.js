const refs = {
  input: document.querySelector("#font-size-control"),
  exampleFontSize: document.querySelector("#text"),
};
refs.input.addEventListener("input", onEventInput);

function onEventInput(event) {
  refs.exampleFontSize.style.fontSize = `${event.currentTarget.value}px`;
}
