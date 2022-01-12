// * Напиши скрипт который, при наборе текста
// * в инпуте input#name - input(событие input),

// * подставляет его текущее значение в span#name - output.

// * Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputValueEl = document.querySelector("#name-input");
const outputSpanEl = document.querySelector("#name-output");

inputValueEl.addEventListener("input", apdateOutputSpanEl);

function apdateOutputSpanEl(e) {
  outputSpanEl.textContent = e.target.value || "Anonymous";
}
