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

let arrayChildrenDiv = [];

function createBoxes(amount) {
  console.log(amount);
  const stepSize = 10;
  let width = 30;
  let height = 30;

  if (arrayChildrenDiv.length != 0) {
    const el = arrayChildrenDiv[arrayChildrenDiv.length - 1];
    width = parseInt(el.style.width) + stepSize;
    height = parseInt(el.style.height) + stepSize;
  }

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.classList.add("box");
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    divEl.style.margin = "5px";
    divEl.style.background = getRandomHexColor();

    arrayChildrenDiv.push(divEl);

    width += stepSize;
    height += stepSize;
  }

  parentDivEl.append(...arrayChildrenDiv);
}

function destroyBoxes() {
  const divDestroyEl = document.querySelectorAll(".box");
  divDestroyEl.forEach((el) => el.remove());
  // parentDivEl.textContent = "";
  arrayChildrenDiv = [];
}
