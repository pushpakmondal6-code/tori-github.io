/* =========================================
   TORI'S BIRTHDAY WEBSITE
   INTERACTIVE FEATURES
========================================= */


/* =========================================
   1. ENTER BIRTHDAY WORLD
========================================= */

function enterBirthday() {

    const cakeSection = document.getElementById("cakeSection");
    const backgroundMusic = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");

    // Start Be My Baby
    backgroundMusic.play()
        .then(function() {
            musicButton.textContent = "⏸️";
        })
        .catch(function() {
            musicButton.textContent = "🎵";
        });

    // Enter birthday world
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

let openedGifts = new Set();


function openGift(number) {

    /* Gift 7 stays locked until 1–6 are opened */
    if (number === 7 && openedGifts.size < 6) {

        const gift7 = document.getElementById("gift7");

        gift7.classList.add("locked-shake");

        setTimeout(function() {
            gift7.classList.remove("locked-shake");
        }, 500);

        return;
    }


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
            icon: "🎁",
            title: "One Last Thing...",
            text: "You opened every little surprise. Now the final gift is waiting for you. ❤️"
        }

    };


    /* Mark gifts 1–6 as opened */
    if (number >= 1 && number <= 6) {

        openedGifts.add(number);

        const giftButton =
            document.querySelector(
                `.gift-card:nth-child(${number})`
            );

        if (giftButton) {
            giftButton.classList.add("gift-opened");
        }

    }


    /* Unlock Gift 7 after all six are opened */
    if (openedGifts.size === 6) {

        const gift7 =
            document.getElementById("gift7");
            gift7.classList.add("final-unlock");

            setTimeout(function() {
            gift7.classList.remove("final-unlock");
            }, 1200);

            createConfetti();
        const gift7Icon =
            document.getElementById("gift7Icon");

        const gift7Text =
            document.getElementById("gift7Text");


        gift7.classList.remove("locked-gift");

        gift7.classList.add("unlocked-gift");

        gift7Icon.textContent = "🎁";
        gift7Text.textContent = "Final Gift";

    }


    icon.textContent =
        gifts[number].icon;

    title.textContent =
        gifts[number].title;

    text.textContent =
        gifts[number].text;


    modal.classList.add("show");


    /* Little celebration when a gift opens */
    createConfetti();

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

    const envelope =
        document.querySelector(".envelope");

    const letter =
        document.getElementById("letterContent");

    envelope.classList.add("opening");

    setTimeout(function() {
        letter.classList.toggle("hidden");
    }, 500);

}


/* =========================================
   7. FLOWER WISHES
========================================= */

function showFlowerWish(wish) {

    const clickedFlower = event.currentTarget;

    clickedFlower.classList.add("flower-bloom");

    setTimeout(function() {

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

        clickedFlower.classList.remove("flower-bloom");

    }, 350);

}


/* =========================================
   8. MUSIC PLAYER
========================================= */

function toggleMusic() {
    const music = document.getElementById("birthdayMusic");
    const backgroundMusic = document.getElementById("backgroundMusic");
    const button = document.querySelector(".music-play-button");
    const status = document.getElementById("musicStatus");

    if (music.paused) {

        // Stop background song
        backgroundMusic.pause();

        // Play Kagaz
        music.play()
            .then(function() {
                button.textContent = "⏸️";
                status.textContent = "Playing our song... ❤️🎶";
            })
            .catch(function() {
                alert("Add your song file first, then press play again. 🎧");
            });

    } else {

        music.pause();
        button.textContent = "🎵";
        status.textContent = "Paused... press play whenever you're ready 🎧❤️";
    }
}

/* =========================================
   9. COUNTDOWN
========================================= */

const birthday = new Date("2026-10-05T00:00:00");


function updateCountdown() {

    const now =
        new Date().getTime();

        const difference =
             birthday.getTime() - now;


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
            "My Pari ❤️",
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
            "Pari's Birthday 🎉",
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
        document.getElementById("finalSurprise");

    /* Create cinematic transition */
    const transition =
        document.createElement("div");

    transition.className =
        "final-transition";

    transition.innerHTML = `
        <div class="transition-stars">✦ ✧ ✦</div>
        <div class="transition-heart">❤️</div>
        <p>One last surprise...</p>
    `;

    document.body.appendChild(transition);

    /* Start the cinematic transition */
    setTimeout(function() {
        transition.classList.add("transition-show");
    }, 50);

    /* Move to final section */
    setTimeout(function() {

        finalSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 900);

    /* Reveal final photo + message */
    setTimeout(function() {

        finalSection.classList.add("final-reveal");

        createConfetti();

    }, 1600);

    /* Remove transition layer */
    setTimeout(function() {

        transition.classList.add("transition-hide");

        setTimeout(function() {
            transition.remove();
        }, 800);

    }, 2200);
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


function toggleBackgroundMusic() {
    const music = document.getElementById("backgroundMusic");
    const button = document.getElementById("musicButton");

    if (music.paused) {
        music.play()
            .then(function() {
                button.textContent = "⏸️";
            })
            .catch(function() {
                alert("Click the page once, then press 🎵 to start the music. 🎧");
            });
    } else {
        music.pause();
        button.textContent = "🎵";
    }
}


// When Kagaz finishes, start the background song again
document.getElementById("birthdayMusic").addEventListener("ended", function() {

    const backgroundMusic = document.getElementById("backgroundMusic");
    const backgroundButton = document.getElementById("musicButton");

    backgroundMusic.currentTime = 0;

    backgroundMusic.play()
        .then(function() {
            backgroundButton.textContent = "⏸️";
        })
        .catch(function() {
            backgroundButton.textContent = "🎵";
        });

});

/* =====================================================
   BIRTHDAY CURTAIN INTRO
===================================================== */

function startBirthdayWorld() {

    const curtain =
        document.getElementById("birthdayCurtain");

    if (!curtain) {
        console.error("Birthday curtain not found.");
        return;
    }

    curtain.style.display = "flex";

    document.body.style.overflow = "hidden";

    setTimeout(function() {

        curtain.classList.add("show-note");

    }, 100);

}


/* =====================================================
   NO BUTTON
===================================================== */

function birthdayNo() {

    const message =
        document.getElementById("noMessage");

    const noButton =
        document.querySelector(".curtain-no");

    if (message) {

        message.textContent =
            "Are you sure? 👀 I think you should check again...";

    }

    if (noButton) {

        noButton.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(-5px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 450
            }
        );

    }

}


/* =====================================================
   YES — OPEN CURTAIN
===================================================== */

function showBirthdayGirl() {

    const curtain =
        document.getElementById("birthdayCurtain");

    const book =
        document.getElementById("birthdayBook");

    if (!curtain || !book) {

        console.error(
            "Birthday curtain elements not found."
        );

        return;
    }

    curtain.classList.add("open-curtain");

    setTimeout(function() {

        book.classList.add("show-book");

    }, 1000);

}


/* =====================================================
   CONTINUE TO BIRTHDAY WORLD
===================================================== */

function continueFromBirthdayGirl() {

    const curtain =
        document.getElementById("birthdayCurtain");

    const book =
        document.getElementById("birthdayBook");

    if (!curtain || !book) {
        return;
    }

    book.classList.add("page-turn");

}


function continueToCake() {

    const curtain =
        document.getElementById("birthdayCurtain");

    const book =
        document.getElementById("birthdayBook");

    if (!curtain || !book) {
        return;
    }

    curtain.classList.remove("show-note");
    curtain.classList.remove("open-curtain");

    book.classList.remove("page-turn");
    book.classList.remove("show-book");

    curtain.style.display = "none";

    document.body.style.overflow = "";

    enterBirthday();

}