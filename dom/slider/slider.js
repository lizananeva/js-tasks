const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

const loop = (direction, event) => {
  event.preventDefault();

  direction === "right"
    ? items.appendChild(items.firstElementChild)
    : items.insertBefore(items.lastElementChild, items.firstElementChild);
}

left.addEventListener("click", event => {
  loop("left", event);
});

right.addEventListener("click", event => {
  loop("right", event);
});
