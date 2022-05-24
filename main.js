const books = document.querySelectorAll(".book");

let hasFlippedBook = false;
let closedBook;
let bookTitle;

function flipBook() {
  this.classList.toggle("flip");
    // console.log('this was clicked')
  //if hasFlippedcard is false - then it's the first time a player has clicked the book
//   if (!hasFlippedBook) {
//     //first click
//     hasFlippedBook = true;
//     closedBook = this;
//     console.log({hasFlippedBook, closedBook})
//   } else {
//       hasFlippedBook = false;
//       bookTitle = this;
//   }
}


books.forEach(book => {
     book.addEventListener('click', flipBook)
    });