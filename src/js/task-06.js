const inputEl = document.querySelector("#validation-input");
const DATA_LENGTH = inputEl.dataset.length;

inputEl.addEventListener("blur", (event) =>
  inputEl.classList.add(changeBorderInputEl(event))
);

function changeBorderInputEl(e) {
  inputEl.classList.remove("invalid", "valid");
  return e.target.value.length === Number(DATA_LENGTH) ? "valid" : "invalid";
}
