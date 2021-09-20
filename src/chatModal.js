const whatsappIcon = require("./whatsappIcon");

module.exports = function chatModal(logoURL) {
  return `<div
      class="chat__modal"
      style="
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 360px;
      max-width: 360px;
      border-radius: 8px;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 12px 24px 0px;
      ">
        <div style="
          background-color:#095E54; 
          color:#fff;
          padding:20px;
          display: flex;
          align-items:center;
          ">

          <div
           class="chat__close"
           style="
            position: absolute;
            top: 5px;
            right: 5px;
            cursor: pointer;
          ">&times;</div>

          <div style="
            background-color: #fff;
            height: 48px;
            width: 48px;
            border-radius: 50%;
            margin-right: 16px;
          ">
            <img style="
              height:100%;
              width:100%;
              object-fit: cover;
              object-position: center;
            " alt="store logo" src=${logoURL} />
          </div>
          <div>
            <div><strong>Customer Service</strong></div>
            <div>Typically replies within a day.</div>
          </div>
        </div>

        <div 
        class="chat__area"
        style="
        padding:20px;
        background-color:#E6DDD4;
        height: 100%;
        "></div>

        <div style="
          background-color:#fff;
          display: flex;
          justify-content: center;
          padding: 20px;
          ">
          <a style="
            background-color: #45C755;
            padding: 16px;
            width:100%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: #fff;
            border-radius: 24px;
          "
          href="https://wa.me/353851675518">${whatsappIcon(
            "none",
            "16px"
          )}&nbsp;Start Chat</a>
        </div>
      </div>`;
};
