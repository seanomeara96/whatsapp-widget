const whatsappIcon = require("./whatsappIcon");

module.exports = function chatButton(diameter) {
  return `<div
    class="chat__button"
    style="
    background-color:#fff;
    height: ${diameter * 16}px; 
    width: ${diameter * 16}px; 
    border-radius: 50%;
    padding: 16px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    ">${whatsappIcon("green")}</div>`;
};
