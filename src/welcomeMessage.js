module.exports = function welcomeMessage() {
  return `<div style="
    background-color: #fff;
    display: inline-block;
    padding: 20px;
    border-radius: 0 20px 20px 20px;
  ">
        <div style="
            color: gray;
        ">Customer Service</div>

        <main style="
            margin: 10px 0;
        ">
            <div>
                Hi there &#128075;      
            </div>
            <br />
            <div>
                How can I help you?  
            </div>
        </main>

        <div style="
            text-align: right;
            color: gray;
            font-size: 13px;
        ">
            ${new Date().getHours()}:${new Date().getMinutes()}        
        </div>
    </div>`;
};
