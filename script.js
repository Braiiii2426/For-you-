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
