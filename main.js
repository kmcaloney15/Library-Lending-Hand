// ------------ Global Variables ---------------------------------------/

const books = document.querySelectorAll(".book");

let hasFlippedBook = false;
let firstFlip;
let secondFlip;
let clickLimit = false;

//---------------------- FUNCTIONS ------------------------------------/

function flipBook() {
  //if clickLimit = true then the player won't be able to keep clicking on the board.
  if (clickLimit == true) {
      return;
    }
    console.log(clickLimit);
    
    this.classList.add("flip");
    // console.log('this was clicked')
    hasFlippedBook = true;
    //if hasFlippedcard is false - then it's the first time a player has clicked the book
    if (hasFlippedBook === false) {
        //first click
        hasFlippedBook = true;
        firstFlip = this;
        // console.log({hasFlippedBook, firstFlip})
    } else {
        //
        hasFlippedBook = false;
        secondFlip = this;
    }
        
        console.log(firstFlip.classList[1]);
        // console.log(secondFlip.classList[1]);
    // look for matching books
    //if match
    //make condition super strict
    if (firstFlip.classList[1] === secondFlip.classList[1]) {
        firstFlip.removeEventListener("click", flipBook);
        secondFlip.removeEventListener("click", flipBook);
        console.log("matched pair");
        
    } else {
        //clickLimit = true here so that they can only click on the books after they have been flipped
      clickLimit = true;
      console.log(clickLimit);
      //not a match
      setTimeout(function () {
        firstFlip.classList.remove("flip");
        secondFlip.classList.remove("flip");

        clickLimit = false;
      }, 1500);
  }
}
//

//  -------------------------- Event Listeners -------------------------/

books.forEach((book) => {
  book.addEventListener("click", flipBook);
});
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


//use datasets to organize and pull the books or make everything like a node and then just check the value / or just check the inner div

//put each function seperate, then call function in main one