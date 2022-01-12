// * Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
// * при клике на button.change - color и выводит значение цвета в span.color.

// * <div class="widget">
// *   <p>Background color: <span class="color">-</span></p>
// *   <button type="button" class="change-color">Change color</button>
// * </div>

// * Для генерации случайного цвета используй функцию getRandomHexColor.

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonEl.addEventListener("click", handlerClick);

function handlerClick() {
  const randomColor = getRandomHexColor();
  bodyEl.style.background = randomColor;
  spanEl.textContent = randomColor;
}
