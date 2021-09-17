module.exports = function typeingBubble() {
  return `<span class="chat__bubble"
    style="
        background-color: #fff;
        display: flex;
        width: 30px;
        border-radius: 20px;
        padding: 20px;
        justify-content: space-between;
    ">
        <span style="
            background-color: grey;
            display:inline-block;
            height: 5px;
            width: 5px;
            border-radius: 2.5px;
        "></span>
        <span style="
            background-color: grey;
            display:inline-block;
            height: 5px;
            width: 5px;
            border-radius: 2.5px;
        "></span>
        <span style="
            background-color: grey;
            display:inline-block;
            height: 5px;
            width: 5px;
            border-radius: 2.5px;
        "></span>
    </span>`;
};
