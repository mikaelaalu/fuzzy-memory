const cardsArray = [
    { image: "images/cake.png", id: "cake" },
    { image: "images/cookies.png", id: "cookie" },
    { image: "images/cup-cake.png", id: "cup-cake" },
    { image: "images/pretzel.png", id: "preztel" },
    { image: "images/croissant.png", id: "croissant" },
    { image: "images/bagel.png", id: "bagel" },
    { image: "images/biscuit.png", id: "biscuit" },
    { image: "images/birthday.png", id: "birthday" },
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




const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;

//flip Cards
function flipCard() {
    //Get 'flip' from css 
    this.classList.toggle('flip');

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


        // Card match?
        if (firstCard.dataset.icon === secondCard.dataset.icon) {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        }
        console.log("removed");
    }


}

// Loop throu the card array, waiting for click, when click is happening
// use flipCard function
cards.forEach(card => card.addEventListener('click', flipCard));

