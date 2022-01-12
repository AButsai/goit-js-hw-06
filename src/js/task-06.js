// * Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// * проверяет его содержимое на
// * правильное количество введённых символов.

// * <input
// *   type="text"
// *   id="validation-input"
// *   data-length="6"
// *   placeholder="Please enter 6 symbols"
// * />

// * Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// * Если введено подходящее количество символов, то border инпута становится зелёным,
// * 	если неправильное - красным.
// * Для добавления стилей, используй CSS - классы valid и invalid,
// * которые мы уже добавили в
// * исходные файлы задания.

const inputEl = document.querySelector("#validation-input");
const DATA_LENGTH = inputEl.dataset.length;

inputEl.addEventListener("blur", (event) =>
  inputEl.classList.add(changeBorderInputEl(event))
);

function changeBorderInputEl(e) {
  inputEl.classList.remove("invalid");
  inputEl.classList.remove("valid");
  return e.target.value.length >= Number(DATA_LENGTH) ? "valid" : "invalid";
}
