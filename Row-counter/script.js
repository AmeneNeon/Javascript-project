let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count =parseInt(localStorage.getItem("count")|| 0)
countEl.textContent = count
function increment() {
  count += 1;
  countEl.textContent = count;
  localStorage.setItem("count",count)
}

function save() {
  let countStr = count + " -  ";

  saveEl.textContent += countStr;

  console.log(count);
  localStorage.setItem("count",count)
}
