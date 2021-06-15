let logos, cards, cardIcon, shuffleBtn;
let openCards, moves, doneCards;
const newGame = document.querySelector(".btn-new");

init();
shuffle(logos);

// NEw Game
newGame.addEventListener("click", init);

document.querySelector(".cards-container").addEventListener("click", (e) => {
    const clickPlace = e.target;
    if (clickPlace.classList[0] === "card") {
        clickPlace.classList.toggle("animate");
        areCardsMathing(clickPlace);
    }
});

// Shuffle Functionality
shuffleBtn.addEventListener("click", () => {
    shuffle(logos);
});

// Functions
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
    openCards = [];
    for (let card of cards) {
        card.classList.remove("animate");
    }
    for (let icon of cardIcon) {
        icon.classList.remove(icon.classList[1]);
    }
    for (let i = 0; i < arr.length; i++) {
        cardIcon[i].classList.add(arr[i]);
    }
    moves.innerHTML = "6";
}

function areCardsMathing(card) {
    openCards.push(card.children[0]);

    if (openCards.length == 2) {
        if (openCards[0].classList[1] == openCards[1].classList[1]) {
            doneCards.push(openCards[0]);
            doneCards.push(openCards[1]);
            // removeAnimate(openCards);

            if (doneCards.length == "8") {
                document.querySelector(".msg").classList.remove("hidden");
                doneCards = [];
            }
            for (let card of openCards) {
                card.parentElement.style.pointerEvents = "none";
            }
            openCards = [];

            moves.innerHTML = parseInt(moves.innerHTML) - 1;
        } else {
            if (moves.innerHTML <= "1" && doneCards.length < "8") {
                console.log(doneCards);
                document.querySelector(".msg h1").innerHTML =
                    "Sorry, Out of moves!";
                document.querySelector(".msg").classList.remove("hidden");
                doneCards = [];
            }
            removeAnimate(openCards);
            openCards = [];
            moves.innerHTML = parseInt(moves.innerHTML) - 1;
        }
    }
}

function removeAnimate(cards) {
    setTimeout(function () {
        for (let card of cards) {
            card.parentElement.classList.remove("animate");
        }
    }, 1000);
}

function check(move) {
    if (move.innerHTML === "0") {
        console.log("LOSTTTTTTT!!!!");
    }
    // console.log(typeof move.innerHTML);
    // console.log(move.innerHTML);
}

function init() {
    logos = [
        "fa-facebook-f",
        "fa-facebook-f",
        "fa-apple",
        "fa-apple",
        "fa-amazon",
        "fa-amazon",
        "fa-google",
        "fa-google",
    ];
    doneCards = [];
    cards = document.querySelectorAll(".card");
    cardIcon = document.getElementsByTagName("i");
    shuffleBtn = document.querySelector(".reorder");

    openCards = [];
    moves = document.querySelector(".moves");
    shuffle(logos);
    document.querySelector(".msg").classList.add("hidden");
    moves.innerHTML = 6;

    for (let card of cards) {
        card.style.pointerEvents = "auto";
    }
}