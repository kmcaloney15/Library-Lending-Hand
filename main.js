// Global Variables --------------------------------------------------------------------------/

//declair books and boxes
books = document.querySelectorAll(".book");
gameBoard = document.querySelector(".gameboard");
let frontImage = document.querySelector(".front");
let title;
// let backFaceImage = document.querySelector('.back-face');
// console.log(books);
let bookParent;
// console.log(backFaceImage)
//  -------------------------- Event Listeners -------------------------------------------/


for (const book of books) {
    book.addEventListener("click", playerClick);
    console.log(bookParent)
}



//once they click - event listener - set timeout where if the win is false toggle the action that flipped the card in the first place - flipBookAction


//-----------------FUNCTIONS------------------------------------/

function playerClick() {
    book.classList.add("flipBookAction");
    // console.log(book);
    
    //value always has to be a string
    title = document.querySelector(".back :nth-child(1)");
    bookParent = book.children[1];
    // console.log(bookParent.children[0].innerHTML);
    let bookName = title.innerText;
    // console.log(title);
    // console.log(bookParent.classList);
    

    setTimeout(timedFlip, 550);

    // console.log('this is working');
}


function timedFlip() {
  frontImage.style.visibility = "hidden";
  title.style.visibility = "visible";
}


//want to try to randomize which books get places where so each game is different. Possibly make them into an array and use math.floor(math.random);

// Win & Loose function


//pop last number from id and then say if id = id - then win




// When two books are matched, have them dissapear - use classes and .remove

// If there is a mis-match - trigger phone noise and deduct a life (maybe in top corner?)
// -how to keep track of misses - should I keep track of the number of flips that don't trigger the win condition?

// End Game - not sure if needs to be seperate from Win/Lose -----------------------------------------------------------------------------

// Maybe have game clear and lose page appear.

//-----------------------------------------------------------------------------

