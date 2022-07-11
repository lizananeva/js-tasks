const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

const createMarkup = quantity => {
  let markup = "";

  for (let i = 0; i < quantity; i++) {
    const block = document.createElement("div");
    block.className = "item";
    block.textContent = i + 1;

    markup += block.outerHTML;
  }

  return markup;
}

quantitySelector.addEventListener("change", event => {
  const quantity = event.target.value;
  const markup = createMarkup(quantity);

  blocksContainer.innerHTML = markup;
});

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
}

let changed = false;

colorSelector.addEventListener("change", event => {
  const color = event.target.value;
  const items = blocksContainer.querySelectorAll(".item");

  changed = !changed;

  for (let i = 0; i < items.length; i++) {
    const currentBlock = items[i];
    const blockNumber = i + 1;
    let colorToApply = "";

    if (changed) {
      colorToApply = blockNumber % 2 !== 0 ? color : "#FFFFFF";
    } else {
      colorToApply = blockNumber % 2 === 0 ? color : "#FFFFFF";
    }

    colorTheBlock(currentBlock, colorToApply);
  }
});
