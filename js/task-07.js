const refs = {
  input: document.querySelector("#font-size-control"),
  exampleFontSize: document.querySelector("#text"),
};

refs.exampleFontSize.style.fontSize = `${refs.input.value}px`;

const onEventInput = (event) => {
  refs.exampleFontSize.style.fontSize = `${event.currentTarget.value}px`;
};

refs.input.addEventListener("input", onEventInput);
