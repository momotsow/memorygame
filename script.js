const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
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
        setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);

}
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

}

cards.forEach(card => card.addEventListener('click',flipCard));
