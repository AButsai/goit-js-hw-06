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
