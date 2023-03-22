const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  // get the x and y position when the mouse over the body

  const xPos = event.offsetX;
  const yPos = event.offsetY;
  // create the new span element just the mouse move over the body

  const spanEl = document.createElement("span");
  // position the new span before appending from left and top to the body,because the xPos is a number we add "px"at the end.

  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  //create the different size of heart

  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  // append the new span element to the body

  bodyEl.appendChild(spanEl);

  // remove the span after three second

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
