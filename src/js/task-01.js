// * Напиши скрипт который:

// * Посчитает и выведет в консоль количество категорий в ul#categories,
// * то есть элементов li.item.
// * Для каждого элемента li.item в списке ul#categories,
// * найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и
// * количество элементов в категории(всех вложенных в него < li >).
// * В результате, в консоли будут выведены такие сообщения.

// * Number of categories: 3

// * Category: Animals
// * Elements: 4

// * Category: Products
// * Elements: 3

// * Category: Technologies
// * Elements: 5

const countCategories = document.querySelectorAll("#categories > .item");
console.log(`Number of categories: ${countCategories.length}`);

const elements = Array.from(countCategories);

for (const element of elements) {
  const contentFromH2 = element.firstElementChild.textContent;
  const countChildrenFromElement = element.lastElementChild.children.length;
  console.log(
    `Category: ${contentFromH2} \nElements: ${countChildrenFromElement}`
  );
}
