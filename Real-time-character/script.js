const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});
// if we invoke the function before the function, the Total Characters will be set to zero and the Remaining will be set to 50
updateCounter();
function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainCounterEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
