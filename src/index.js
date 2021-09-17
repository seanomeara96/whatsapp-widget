const chatButton = require("./chatButton");
const chatContainer = require("./chatContainer");
const chatModal = require("./chatModal");
const typingBubble = require("./typingBubble");
const welcomeMessage = require("./welcomeMessage");

function main() {
  let opened = false;
  const body = document.querySelector("body");
  // insert container
  body.insertAdjacentHTML("beforeend", chatContainer());
  const container = document.querySelector(".chat__container");
  // insert chat modal
  container.insertAdjacentHTML("beforeend", chatModal());
  let modal = document.querySelector(".chat__modal");
  const chatArea = document.querySelector(".chat__area");
  // add close event listener to modal close button
  let closeButton = document.querySelector(".chat__close");
  closeButton.addEventListener("click", () => (modal.style.display = "none"));
  // insert chat button
  container.insertAdjacentHTML("beforeend", chatButton(3));
  let button = document.querySelector(".chat__button");
  // add toggle capability rto chat button
  button.addEventListener("click", () => {
    modal.style.display === "none"
      ? (modal.style.display = "flex")
      : (modal.style.display = "none");
    if (!opened) {
      chatArea.insertAdjacentHTML("beforeend", typingBubble());
      const bubble = document.querySelector(".chat__bubble");
      animation(bubble, () => {
        opened = true;
        bubble.remove();
        chatArea.insertAdjacentHTML("beforeend", welcomeMessage());
      });
    }
  });
}
main();

function animation(bubble, cb) {
  let count = 0;
  let iteration = setInterval(() => {
    [...bubble.children].forEach((child) => {
      child.style.backgroundColor = "grey";
    });
    bubble.children[count].style.backgroundColor = "black";
    count === 2 ? (count = 0) : count++;
  }, 150);
  setTimeout(() => {
    clearInterval(iteration);
    cb();
  }, 1500);
}
