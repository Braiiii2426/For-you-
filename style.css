* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


body {
    min-height: 100vh;

    font-family: Georgia, "Times New Roman", serif;

    color: white;

    background:
        radial-gradient(
            circle at top,
            #382252,
            #120b1b 55%,
            #050308
        );

    overflow: hidden;
}


/* =========================
   SCREEN
========================= */

.screen {

    width: 100%;
    height: 100vh;

    display: flex;

    justify-content: center;
    align-items: center;

    padding: 25px;

    position: relative;

    z-index: 5;
}


.hidden {
    display: none !important;
}


/* =========================
   CARD
========================= */

.card {

    width: 100%;
    max-width: 650px;

    padding: 60px 40px;

    text-align: center;

    border-radius: 28px;

    background:
        rgba(255, 255, 255, 0.07);

    border:
        1px solid rgba(255, 255, 255, 0.15);

    backdrop-filter: blur(20px);

    box-shadow:
        0 30px 100px rgba(0, 0, 0, 0.5);

    animation: appear 1s ease;
}


/* =========================
   TEXT
========================= */

.label {

    font-family: Arial, sans-serif;

    font-size: 11px;

    letter-spacing: 5px;

    opacity: 0.55;

    margin-bottom: 25px;
}


h1 {

    font-size: clamp(38px, 7vw, 70px);

    line-height: 1.05;

    font-weight: normal;
}


.card > p {

    margin-top: 22px;

    opacity: 0.55;
}


/* =========================
   BUTTON
========================= */

button {

    margin-top: 35px;

    padding: 16px 32px;

    border: none;

    border-radius: 50px;

    background: white;

    color: #160d20;

    font-size: 15px;

    cursor: pointer;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}


button:hover {

    transform: translateY(-4px);

    box-shadow:
        0 15px 40px rgba(255, 255, 255, 0.25);
}


button:active {

    transform: scale(0.97);
}


/* =========================
   MESSAGE
========================= */

.message-card {

    min-height: 430px;

    display: flex;

    flex-direction: column;

    justify-content: center;
}


.envelope {

    font-size: 60px;

    margin-bottom: 25px;

    animation:
        floating 3s ease-in-out infinite;
}


#message {

    min-height: 130px;

    margin-top: 10px;

    font-size: clamp(21px, 4vw, 31px);

    line-height: 1.6;
}


.line {

    width: 60px;

    height: 1px;

    margin: 30px auto 15px;

    background:
        rgba(255, 255, 255, 0.4);
}


.signature {

    opacity: 0.5;

    font-style: italic;
}


/* =========================
   BACKGROUND
========================= */

.glow {

    position: fixed;

    width: 500px;
    height: 500px;

    border-radius: 50%;

    background:
        rgba(130, 70, 180, 0.15);

    filter: blur(100px);

    top: -200px;
    left: -150px;
}


.second {

    top: auto;
    left: auto;

    right: -200px;
    bottom: -250px;

    background:
        rgba(180, 70, 140, 0.12);
}


/* =========================
   HEARTS
========================= */

.heart {

    position: fixed;

    bottom: -80px;

    color:
        rgba(255, 255, 255, 0.12);

    font-size: 40px;

    animation:
        float 9s linear infinite;

    z-index: 1;
}


.heart1 {
    left: 10%;
}


.heart2 {
    left: 35%;
    animation-delay: 2s;
}


.heart3 {
    left: 65%;
    animation-delay: 4s;
}


.heart4 {
    left: 85%;
    animation-delay: 6s;
}


/* =========================
   ANIMATIONS
========================= */

@keyframes appear {

    from {

        opacity: 0;

        transform:
            translateY(30px)
            scale(0.97);
    }

    to {

        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}


@keyframes floating {

    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}


@keyframes float {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    100% {

        transform:
            translateY(-110vh)
            rotate(360deg);

        opacity: 0;
    }
}


/* =========================
   PHONE
========================= */

@media (max-width: 600px) {

    .card {

        padding: 45px 25px;
    }

    h1 {

        font-size: 40px;
    }
}
