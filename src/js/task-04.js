const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]');
const spanValueEl = document.querySelector("#value");

let counterValue = 0;

decrementButtonEl.addEventListener("click", () => {
  counterValue -= 1;
  spanValueEl.textContent = counterValue;
});

incrementButtonEl.addEventListener("click", () => {
  counterValue += 1;
  spanValueEl.textContent = counterValue;
});
