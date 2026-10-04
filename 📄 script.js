/* =========================================
   TORI'S BIRTHDAY WEBSITE
   INTERACTIVE FEATURES
========================================= */


/* =========================================
   1. ENTER BIRTHDAY WORLD
========================================= */

function enterBirthday() {

    const cakeSection = document.getElementById("cakeSection");

    cakeSection.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();

}


/* =========================================
   2. BLOW OUT CANDLES
========================================= */

function blowCandles() {

    const candles = document.querySelectorAll(".candle");

    candles.forEach(function(candle) {

        candle.classList.add("blown");

    });


    const wishMessage =
        document.getElementById("wishMessage");

    wishMessage.classList.remove("hidden");

    createConfetti();

}


/* =========================================
   3. CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById("confetti-container");

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("span");

        confetti.innerHTML =
            ["✨", "💖", "🎉", "⭐", "🌸", "💕"]
            [Math.floor(Math.random() * 6)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.top =
            "-20px";

        confetti.style.fontSize =
            Math.random() * 15 + 10 + "px";

        confetti.style.zIndex = "3000";

        confetti.style.pointerEvents = "none";

        confetti.style.animation =
            "confettiFall " +
            (Math.random() * 3 + 2) +
            "s linear forwards";

        container.appendChild(confetti);


        setTimeout(function() {

            confetti.remove();

        }, 6000);

    }

}


/* =========================================
   4. GIFT SYSTEM
========================================= */

function openGift(number) {

    const modal =
        document.getElementById("modal");

    const icon =
        document.getElementById("modalIcon");

    const title =
        document.getElementById("modalTitle");

    const text =
        document.getElementById("modalText");


    const gifts = {

        1: {
            icon: "💌",
            title: "A Letter For You",
            text: "Some words from me that I really wanted you to read today. ❤️"
        },

        2: {
            icon: "🌸",
            title: "A Bouquet Of Wishes",
            text: "Every flower here carries a little wish for your new year."
        },

        3: {
            icon: "📸",
            title: "Our Memories",
            text: "A tiny collection of moments that deserve to be remembered forever."
        },

        4: {
            icon: "🎧",
            title: "A Song For You",
            text: "There is one song waiting for you in this little birthday world."
        },

        5: {
            icon: "🎮",
            title: "A Little Game",
            text: "Think you know everything about us? Let's see..."
        },

        6: {
            icon: "🌟",
            title: "Your Year Ahead",
            text: "I have a few wishes for the beautiful year waiting for you."
        },

        7: {
            icon: "🔒",
            title: "Not Yet...",
            text: "This is the final gift. You'll have to reach the end to unlock it. ❤️"
        }

    };


    icon.textContent =
        gifts[number].icon;

    title.textContent =
        gifts[number].title;

    text.textContent =
        gifts[number].text;


    modal.classList.add("show");

}


/* =========================================
   5. CLOSE MODAL
========================================= */

function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("show");

}


/* =========================================
   6. LETTER
========================================= */

function openLetter() {

    const letter =
        document.getElementById("letterContent");

    letter.classList.toggle("hidden");

}


/* =========================================
   7. FLOWER WISHES
========================================= */

function showFlowerWish(wish) {

    const modal =
        document.getElementById("modal");

    document
        .getElementById("modalIcon")
        .textContent = "🌸";

    document
        .getElementById("modalTitle")
        .textContent = "A Wish For You";

    document
        .getElementById("modalText")
        .textContent = wish;


    modal.classList.add("show");

}


/* =========================================
   8. MUSIC PLAYER
========================================= */

function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const button =
        document.getElementById("musicButton");


    if (music.paused) {

        music.play()
            .then(function() {

                button.textContent = "⏸️";

            })
            .catch(function() {

                alert(
                    "Add your song file first, then press play again. 🎧"
                );

            });

    }

    else {

        music.pause();

        button.textContent = "🎵";

    }

}


/* =========================================
   9. COUNTDOWN
========================================= */

/*
   IMPORTANT:

   Change this date later to her actual
   birthday.

   Example:

   December 25, 2026 at 12:00 AM

*/

const birthdayDate =
    new Date("December 25, 2026 00:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        birthdayDate - now;


    if (difference <= 0) {

        document.getElementById("days")
            .textContent = "00";

        document.getElementById("hours")
            .textContent = "00";

        document.getElementById("minutes")
            .textContent = "00";

        document.getElementById("seconds")
            .textContent = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


setInterval(
    updateCountdown,
    1000
);

updateCountdown();


/* =========================================
   10. BIRTHDAY QUIZ
========================================= */

const quizQuestions = [

    {
        question:
            "Who is the birthday girl? 🎀",

        answers: [
            "Tori ❤️",
            "Someone else 😂",
            "A mystery person"
        ],

        correct: 0

    },


    {
        question:
            "What does this website celebrate? 🎂",

        answers: [
            "A random Tuesday",
            "Tori's Birthday 🎉",
            "My exam result"
        ],

        correct: 1

    },


    {
        question:
            "What should every birthday girl receive? 💖",

        answers: [
            "Happiness",
            "Love",
            "Both ❤️"
        ],

        correct: 2

    }

];


let currentQuestion = 0;


function loadQuizQuestion() {

    const question =
        quizQuestions[currentQuestion];


    document.getElementById(
        "quizQuestion"
    ).textContent =
        question.question;


    const answers =
        document.getElementById(
            "quizAnswers"
        );


    answers.innerHTML = "";


    question.answers.forEach(
        function(answer, index) {

            const button =
                document.createElement("button");

            button.textContent =
                answer;

            button.className =
                "quiz-answer";


            button.onclick =
                function() {

                    checkAnswer(index);

                };


            answers.appendChild(button);

        }
    );


    document.getElementById(
        "quizResult"
    ).textContent = "";


    document.getElementById(
        "nextQuestion"
    ).classList.add("hidden");

}


function checkAnswer(selected) {

    const question =
        quizQuestions[currentQuestion];


    const result =
        document.getElementById(
            "quizResult"
        );


    if (selected === question.correct) {

        result.textContent =
            "Correct! 😂❤️";

        createConfetti();

    }

    else {

        result.textContent =
            "Close! Try the next one. 😌";

    }


    document.getElementById(
        "nextQuestion"
    ).classList.remove("hidden");

}


function nextQuizQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        currentQuestion = 0;

        document.getElementById(
            "quizQuestion"
        ).textContent =
            "Quiz complete! 🎉❤️";

        document.getElementById(
            "quizAnswers"
        ).innerHTML =
            "<p>You survived the birthday quiz 😂</p>";

        document.getElementById(
            "quizResult"
        ).textContent =
            "Now go enjoy your birthday! 🎂";

        document.getElementById(
            "nextQuestion"
        ).classList.add("hidden");

        createConfetti();

        return;

    }


    loadQuizQuestion();

}


loadQuizQuestion();


/* =========================================
   11. FINAL GIFT
========================================= */

function unlockFinalGift() {

    const finalSection =
        document.getElementById(
            "finalSurprise"
        );


    finalSection.scrollIntoView({
        behavior: "smooth"
    });


    setTimeout(function() {

        createConfetti();

    }, 700);

}


/* =========================================
   12. CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

document
    .getElementById("modal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                this
            ) {

                closeModal();

            }

        }
    );


/* =========================================
   13. CONFETTI ANIMATION
========================================= */

const confettiStyle =
    document.createElement("style");


confettiStyle.innerHTML = `

@keyframes confettiFall {

    0% {

        transform:
            translateY(-20px)
            rotate(0deg);

        opacity: 1;

    }

    100% {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;

    }

}

`;


document.head.appendChild(
    confettiStyle
);


/* =========================================
   14. WELCOME EFFECT
========================================= */

window.addEventListener(
    "load",
    function() {

        setTimeout(
            createConfetti,
            1200
        );

    }
);