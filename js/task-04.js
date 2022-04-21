const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
const refs = {
  decrementBtnEl: document.querySelector('[data-action="decrement"]'),
  valueOfCounterEl: document.querySelector("#value"),
  incrementBtnEl: document.querySelector('[data-action="increment"]'),
};

refs.decrementBtnEl.addEventListener("click", function () {
  counter.decrement();
  refs.valueOfCounterEl.textContent = counter.value;
});

refs.incrementBtnEl.addEventListener("click", function () {
  counter.increment();
  refs.valueOfCounterEl.textContent = counter.value;
});
