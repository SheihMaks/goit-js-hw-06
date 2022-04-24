const refs = {
  buttonChange: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  nameOfColor: document.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onChangeColor = () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.nameOfColor.textContent = refs.body.style.backgroundColor;
};

refs.buttonChange.addEventListener("click", onChangeColor);
