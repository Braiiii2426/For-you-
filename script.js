const openButton = document.getElementById("openButton");
const welcome = document.getElementById("welcome");
const messageScreen = document.getElementById("messageScreen");
const message = document.getElementById("message");

openButton.addEventListener("click", function () {

    welcome.classList.add("hidden");

    messageScreen.classList.remove("hidden");

    showMessage();

});


function showMessage() {

    const params = new URLSearchParams(
        window.location.search
    );

    const customMessage = params.get("message");


    if (!customMessage) {

        message.textContent =
            "HOY BRYNELLE, mag-aral ka ng mabuti kung gusto mong maging kadete tsaka may uuwiang magandang asawa HAHAHAHA.";

        return;
    }


    message.textContent = "";

    let position = 0;


    function typeMessage() {

        if (position < customMessage.length) {

            message.textContent +=
                customMessage[position];

            position++;

            setTimeout(typeMessage, 40);
        }
    }


    typeMessage();

}
