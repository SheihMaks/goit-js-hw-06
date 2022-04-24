function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsOfElements: document.querySelector("#controls"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
  input: document.querySelector("input"),
};

function onCreateBoxes() {
  const amount = refs.input.value;
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.classList.add("temp");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    elements.push(divEl);
  }
  refs.divBoxes.append(...elements);
}

function onDestroyBoxes() {
  refs.input.value = "";
  const forRemoveRef = document.querySelectorAll(".temp");
  for (let i = 0; i < forRemoveRef.length; i += 1) {
    forRemoveRef[i].remove();
  }
}
refs.buttonCreate.addEventListener("click", onCreateBoxes);
refs.buttonDestroy.addEventListener("click", onDestroyBoxes);
