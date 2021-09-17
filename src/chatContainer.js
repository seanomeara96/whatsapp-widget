module.exports = function chatContainer(bottom, left) {
  return `<div class="chat__container"
    style="
    position:fixed; 
    bottom: ${bottom}px; 
    left: ${left}px; 
    width:calc(100% - 4rem);
    "
  ></div>`;
};
