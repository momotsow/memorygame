const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle('flip');
    
    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;

    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();

}
}

function checkForMatch() {
     // do cards match
     if (firstCard.dataset.framework === secondCard.dataset.framework) {
        // it's a match!!!
        disableCards();
    }else{
        //not match
        unflipCards(); 

}
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

     //not match
     setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null; 
    secondCard = null;
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click',flipCard));
