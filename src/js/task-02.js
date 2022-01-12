// * Напиши скрипт, который для каждого элемента массива ingredients:

// * Создаст отдельный элемент <li>.
// * Обзательно используй метод document.createElement().
// * Добавит название ингредиента как его текстовое содержимое.
// * Добавит элементу класс item.
// * После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUL = document.querySelector("#ingredients");

const liForUl = [];

for (const ingredient of ingredients) {
  const ingredientLi = document.createElement("li");
  ingredientLi.innerText = ingredient;
  ingredientLi.classList.add("item");
  liForUl.push(ingredientLi);
}

ingredientsUL.append(...liForUl);
