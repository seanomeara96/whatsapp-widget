const whatsappIcon = require("./whatsappIcon");

module.exports = function chatButton() {
  return `<div
    class="chat__button"
    style="
    background-color:#fff;
    height: 4rem; 
    width: 4rem; 
    border-radius:3rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    ">${whatsappIcon("green")}</div>`;
};
