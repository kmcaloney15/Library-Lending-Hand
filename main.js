
// Global Variables --------------------------------------------------------------------------
//declair books and boxes
books = document.querySelector('.book');
gameBoard = document.querySelector('.gameboard');
let frontFaceImage = document.querySelector('.front-face');

let backFaceImage = document.querySelector('.back-face');
console.log(books);
console.log(backFaceImage)

// Click addEventListener - for flipping the books -----------------------------------------------------------------------------
//add all below to a function
books.addEventListener('click',function (){
    books.classList.add('flipBookAction');
    console.log(books);
    //value always has to be a string

//add class or proberties to make front face image hidden, and then show the backface text
setTimeout(timedFlip,550);



// backFaceText.style.backfaceVisibility = 'visibile';
console.log('this is working');


});

//need text to keep displaying

function timedFlip(){
    frontFaceImage.style.visibility = 'hidden';
    backFaceImage.style.visibility = 'visible';

}


//want to use classes to distinguise which pair matches with witch. for and if loops? 

//want to try to randomize which books get places where so each game is different. Possibly make them into an array and use math.floor(math.random);




// Win & Loose Conditionals -----------------------------------------------------------------------------

// When two books are matched, have them dissapear - use classes and .remove


// If there is a mis-match - trigger phone noise and deduct a life (maybe in top corner?)
// -how to keep track of misses - should I keep track of the number of flips that don't trigger the win condition?



// End Game - not sure if needs to be seperate from Win/Lose -----------------------------------------------------------------------------

// Maybe have game clear and lose page appear.


//-----------------------------------------------------------------------------


// make the book titles a child of the book images and make it relative