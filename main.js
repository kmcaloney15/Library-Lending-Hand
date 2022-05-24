// ------------ Global Variables ---------------------------------------/

const books = document.querySelectorAll(".book");

let hasFlippedBook = false;
let closedBook;
let bookTitle;

//---------------------- FUNCTIONS ------------------------------------/

function flipBook() {
  this.classList.add("flip");
    // console.log('this was clicked')
  //if hasFlippedcard is false - then it's the first time a player has clicked the book
  if (hasFlippedBook === false) {
    //first click
    hasFlippedBook = true;
    closedBook = this;
    console.log({hasFlippedBook, closedBook})
  } else {
      //
      hasFlippedBook = false;
      bookTitle = this;
  }
}

//  -------------------------- Event Listeners -------------------------/


books.forEach(book => {
     book.addEventListener('click', flipBook)
    });
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach