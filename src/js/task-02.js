const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUL = document.querySelector("#ingredients");

const liForUl = ingredients.map((ingredient) => {
  const ingredientLi = document.createElement("li");
  ingredientLi.innerText = ingredient;
  ingredientLi.classList.add("item");

  return ingredientLi;
});

ingredientsUL.append(...liForUl);
