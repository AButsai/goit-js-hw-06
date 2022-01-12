// * Напиши скрипт создания и очистки коллекции элементов.
// * Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// * после чего рендерится коллекция.При нажатии на кнопку Очистить,
// * коллекция элементов очищается.

// * <div id="controls">
// *   <input type="number" min="1" max="100" step="1" />
// *   <button type="button" data-create>Create</button>
// *   <button type="button" data-destroy>Destroy</button>
// * </div>

// * <div id="boxes"></div>

// * Создай функцию createBoxes(amount), которая принимает один параметр - число.
// * Функция создает столько < div >, сколько указано в amount и добавляет их
// * в div#boxes.

// * 1. Размеры самого первого <div> - 30px на 30px.

// * 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

// * 3. Все элементы должены иметь случайный цвет фона в формате HEX.

// * Используй готовую функцию getRandomHexColor для получения цвета.
// * function getRandomHexColor() {
// *   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// * }

// * Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// *   тем самым удаляя все созданные элементы.

const inputEl = document.querySelector('[type="number"]');
const createElement = document.querySelector("[data-create]");
const destroyElement = document.querySelector("[data-destroy]");
const parentDivEl = document.querySelector("#boxes");

createElement.addEventListener("click", () => {
  createBoxes(Number(inputEl.value));
});

destroyElement.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const arrayCildrenDiv = [];
  const stepSize = 10;
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.classList.add("box");
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    divEl.style.margin = "5px";
    divEl.style.background = getRandomHexColor();

    arrayCildrenDiv.push(divEl);

    width += stepSize;
    height += stepSize;
  }

  parentDivEl.append(...arrayCildrenDiv);
}

function destroyBoxes() {
  const divDestroyEl = document.querySelectorAll(".box");
  divDestroyEl.forEach((el) => el.remove());
}
