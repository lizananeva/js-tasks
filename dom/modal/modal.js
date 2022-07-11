const openButton = document.querySelector("#openOverlay");
const body = document.body;
const messageModal = createModal("It's working!");

openButton.addEventListener("click", event => {
  body.appendChild(messageModal);
});

function createModal(content) {
  const template = document.querySelector("#overlayTemplate");
  const overlayElement = document.createElement("div");

  overlayElement.classList.add("overlay");
  overlayElement.innerHTML = template.innerHTML;
  overlayElement.addEventListener("click", event => {
    if (event.target === overlayElement) {
      closeElement.click();
    }
  });

  const closeElement = overlayElement.querySelector(".close");

  closeElement.addEventListener("click", event => {
    event.preventDefault();

    body.removeChild(overlayElement);
  });

  const contentElement = overlayElement.querySelector(".content");
  contentElement.textContent = content;

  return overlayElement;
}
