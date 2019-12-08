"use strict";

const cardsArray = [
  { image: "images/cake.png", id: "cake" },
  { image: "images/cookies.png", id: "cookie" },
  { image: "images/cup-cake.png", id: "cup-cake" },
  { image: "images/pretzel.png", id: "preztel" },
  { image: "images/croissant.png", id: "croissant" },
  { image: "images/bagel.png", id: "bagel" },
  { image: "images/biscuit.png", id: "biscuit" },
  { image: "images/birthday.png", id: "birthday" }
];

const dubbleCards = [...cardsArray, ...cardsArray];

// Helper function to prevent XSS injections
// Creates an HTML element from string, using in genereate card function
const stringToHTML = str => {
  const div = document.createElement("div");
  div.innerHTML = str;
  return div.firstChild;
};

// Create card template with a template literal
const createMemoryCard = (image, id) => {
  return `<div class="memory-card" data-icon="${id}">
  <img class="card-back" src="images/question.png">
  <img class="card-front" src="${image}" >
  </div>`;
};

// Shuffles cards
const shuffle = a => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

const resetGame = () => {
  hasFlippedCard = false;
  lockCards = false;
  firstCard = null;
  secondCard = null;
};

const memoryGame = document.querySelector(".memory");

// Function that creates all cards
const generateCards = () => {
  shuffle(dubbleCards);
  dubbleCards.forEach(card => {
    const image = createMemoryCard(card.image, card.id);
    memoryGame.appendChild(stringToHTML(image));
  });
};

const isMatch = () => {
  // Match
  if (firstCard.dataset.icon === secondCard.dataset.icon) {
    resetGame();
  } else {
    // No match
    unflipCards();
  }
};

const unflipCards = () => {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockCards = false;

    resetGame();
  }, 1300);
};

let hasFlippedCard = false;
let firstCard, secondCard;
let lockCards = false;

function flipCard() {
  if (lockCards) return;
  if (this === firstCard) return;

  this.classList.toggle("flip");

  if (!hasFlippedCard) {
    //First click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    //Second klick
    hasFlippedCard = false;
    secondCard = this;

    isMatch();
  }
}

const init = () => {
  const cards = document.querySelectorAll(".memory-card");
  // Waiting for click and then use flicard function
  cards.forEach(card => card.addEventListener("click", flipCard));
};

generateCards();
init();

const playAgain = () => {
  resetGame();
  memoryGame.innerHTML = "";
  generateCards();
  init();
};
const button = document.querySelector(".button");

button.addEventListener("click", playAgain);
