const cards = document.querySelectorAll('.memory-card');


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    /*console.log('Clicked!');*/
    /*console.log(this);*/
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    //second click
    secondCard = this;
    checkMatches();
}
//cards match?
function checkMatches() {
    let matches = firstCard.dataset.name === secondCard.dataset.name;
    matches ? disableCards() : unflipCards();
}
//if it's a match
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);


    resetBoard();
}
//if it's not a match
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
/*console.log('Function works!');*/
/*console.log(firstCard.dataset.name);
console.log(secondCard.dataset.name); */


/*console.log({firstCard, secondCard});*/




cards.forEach(card => card.addEventListener('click', flipCard));