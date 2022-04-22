const refs = {
  decrementBtnEl: document.querySelector('[data-action="decrement"]'),
  valueOfCounterEl: document.querySelector("#value"),
  incrementBtnEl: document.querySelector('[data-action="increment"]'),
};

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
  updateValueInUI() {
    refs.valueOfCounterEl.textContent = counter.value;
  },
};

const onDecrementButton = () => {
  counter.decrement();
  counter.updateValueInUI();
};
const onIncrementButton = () => {
  counter.increment();
  counter.updateValueInUI();
};

refs.decrementBtnEl.addEventListener("click", onDecrementButton);
refs.incrementBtnEl.addEventListener("click", onIncrementButton);

// refs.decrementBtnEl.addEventListener("click", () => {
//   counter.decrement();
//   refs.valueOfCounterEl.textContent = counter.value;
// });

// refs.incrementBtnEl.addEventListener("click", function () {
//   counter.increment();
//   refs.valueOfCounterEl.textContent = counter.value;
// });
