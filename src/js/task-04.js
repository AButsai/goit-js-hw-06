// * Создай переменную counterValue в которой будет храниться текущее значение счетчика и
// * инициализируй её значением 0.
// * Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// * Обновляй интерфейс новым значением переменной counterValue.

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
