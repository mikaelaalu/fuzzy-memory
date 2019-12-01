const cardsArray = [
    { image: "images/cake.png" },
    { image: "images/cookies.png" },
    { image: "images/cup-cake.png" },
    { image: "images/pretzel.png" },
    { image: "images/croissant.png" },
    { image: "images/bagel.png" },
    { image: "images/biscuit.png" },
    { image: "images/birthday.png" },
]


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
const createMemoryCard = (image) => {
    return `<div class="memory-card">
    <img class="card-back" src="images/question.png">
    <img class="card-front" src="${image}">
        </div>`;
};

// Create all cards
const generateCards = () => {
    shuffle(shuffleCards);
    shuffleCards.forEach(card => {
        const image = createMemoryCard(card.image);
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



//flip Cards

const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));



// Loop throu the card array, waiting for click, when click is happening
// use flipCard function
