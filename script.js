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

const memoryGame = document.querySelector(".memory");
const button = document.querySelectorAll(".button");

//make dublette of cardsArray
const shuffleCards = [...cardsArray, ...cardsArray];

// Helper function to prevent XSS injections
// Creates an HTML element from string
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

// Create all cards
const generateCards = () => {
  shuffle(shuffleCards);
  shuffleCards.forEach(card => {
    const image = createMemoryCard(card.image, card.id);
    // console.log(cards);
    // console.log(stringToHTML(image))
    memoryGame.appendChild(stringToHTML(image));
  });
};

generateCards();

// Shuffles cards
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockCards = false;

const isMatch = () => {
  // match
  if (firstCard.dataset.icon === secondCard.dataset.icon) {
    disabelCards();
  } else {
    // no match
    unflipCards();
  }
};

const disabelCards = () => {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetGame();
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

const resetGame = () => {
  hasFlippedCard = false;
  lockCards = false;
  firstCard = null;
  secondCard = null;
};

//flip Cards
function flipCard() {
  if (lockCards) return; // if lockcard is true, return,
  if (this === firstCard) return;
  //Get 'flip' from css
  this.classList.toggle("flip");

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    //second klick
    hasFlippedCard = false;
    secondCard = this;
    // console.log(firstCard.dataset.icon);
    // console.log(secondCard.dataset.icon);

    isMatch();
  }
}

// Loop throu the card array, waiting for click, when click is happening
// use flipCard function
cards.forEach(card => card.addEventListener("click", flipCard));

button.addEventListener("click", playAgain);
//Function for play again button
const playAgain = () => {
  memoryGame.innerHTML = "";
  generateCards();
};
