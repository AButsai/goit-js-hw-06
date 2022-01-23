const inputValueEl = document.querySelector("#name-input");
const outputSpanEl = document.querySelector("#name-output");

inputValueEl.addEventListener("input", apdateOutputSpanEl);

function apdateOutputSpanEl(e) {
  outputSpanEl.textContent = e.target.value || "Anonymous";
}
