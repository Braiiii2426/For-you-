const openButton =
    document.getElementById("openButton");

const welcome =
    document.getElementById("welcome");

const messageScreen =
    document.getElementById("messageScreen");

const messageElement =
    document.getElementById("message");


openButton.addEventListener("click", () => {

    welcome.classList.add("hidden");

    messageScreen.classList.remove("hidden");

    showMessage();

});


function showMessage() {

    const parameters =
        new URLSearchParams(
            window.location.search
        );

    const message =
        parameters.get("message");


    if (!message) {

        messageElement.textContent =
            "This is where your message will appear.";

        return;
    }


    let index = 0;

    messageElement.textContent = "";


    function type() {

        if (index < message.length) {

            messageElement.textContent +=
                message[index];

            index++;

            setTimeout(type, 40);
        }
    }


    type();
}
/* =========================
   CREATE MESSAGE
========================= */

.create-card {

    width: 100%;
    max-width: 650px;

    padding: 50px 35px;

    text-align: center;

    border-radius: 28px;

    background:
        rgba(255,255,255,0.07);

    border:
        1px solid
        rgba(255,255,255,0.15);

    backdrop-filter:
        blur(20px);

    box-shadow:
        0 30px 100px
        rgba(0,0,0,0.5);

}


h2 {

    font-size: 38px;

    font-weight: normal;

    margin-bottom: 25px;

}


textarea {

    width: 100%;

    height: 180px;

    padding: 18px;

    resize: none;

    border-radius: 15px;

    border:
        1px solid
        rgba(255,255,255,0.15);

    background:
        rgba(0,0,0,0.25);

    color: white;

    font-family: Georgia, serif;

    font-size: 17px;

    outline: none;

}


textarea:focus {

    border-color:
        rgba(255,255,255,0.5);

}


.counter {

    text-align: right;

    margin-top: 7px;

    font-family: Arial, sans-serif;

    font-size: 12px;

    opacity: 0.45;

}


.result {

    margin-top: 30px;

}


.result p {

    opacity: 0.6;

}


#link {

    width: 100%;

    margin-top: 10px;

    padding: 13px;

    border: none;

    border-radius: 10px;

    background:
        rgba(255,255,255,0.1);

    color: white;

}


.copy-button {

    margin-top: 12px;

    padding: 12px 25px;

    border: none;

    border-radius: 25px;

    cursor: pointer;

}
