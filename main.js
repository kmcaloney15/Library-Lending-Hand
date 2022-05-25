// ------------ Global Variables ---------------------------------------/

const books = document.querySelectorAll(".book");
const playerLivesCount = document.querySelector('span');
//how many lives they start with
const playerLives = 6;

let hasFlippedBook = false;
let firstFlip;
let secondFlip;
let clickLimit = false;

playerLivesCount.textContent = playerLives;


//---------------------- FUNCTIONS ------------------------------------/

function flipBook() {
  //if clickLimit = true then the player won't be able to keep clicking on the board.
  if (clickLimit == true) {
    return;
  }
  //disables player from clicking the same book twice in a row
  if (this === firstFlip) {
    return;
  }
  console.log(clickLimit);

  this.classList.add("flip");
  // console.log('this was clicked')
  // hasFlippedBook = true;
  //if hasFlippedBook is false - then it's the first time a player has clicked the book
  if (hasFlippedBook === false) {
    //first click
    hasFlippedBook = true;
    firstFlip = this;
    // console.log({hasFlippedBook, firstFlip})
  } else {
    //
    hasFlippedBook = false;
    secondFlip = this;

    // console.log(firstFlip.classList[1]);
    // console.log(secondFlip.classList[1]);
    // look for matching books
    //if match
    //make condition super strict
    checkMatch();
  }
}

//put each function seperate, then call function in main one
function checkMatch() {
  //FIXME //when same book clicked twice, it say's its a match
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

function restartGame(){
    hasFlippedBook = false;

}

//need to randomize books - use math.floor(math.ranom()*16)


//  -------------------------- Event Listeners -------------------------/

books.forEach((book) => {
  book.addEventListener("click", flipBook);
});
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//use datasets to organize and pull the books or make everything like a node and then just check the value / or just check the inner div


//array of array - inside book title and how many times //loop through //have it write in the class to randomize

let doubleBooks = [];

//testing the random books / push to write them on the cards
function printBooks(booksArray){
     for (let i = 0; i < booksArray.length; i++){
        console.log(booksArray[i]);
        // console.log(typeof booksArray[i]);
        doubleBooks.push(booksArray[i]);
         doubleBooks.push(booksArray[i]);
        //  console.log(myBook.title, myBook.class)
    }
    console.log('this is the', doubleBooks);
    // console.log(doubleBooks);

    for (let i = 0; i < doubleBooks.length; i++){
        let randBook = Math.floor(Math.random()*doubleBooks.length);
        let currentBook = doubleBooks.splice(randBook, 1);
        console.log('Current book is',  currentBook.title);
        // console.log(currentBook[randBook]);
        // console.log(randBook);
    }
}

//creating the objects of each book to push into the array
let booksArray = [];
booksArray.push({
    title:'Where the Sidewalk Ends by Shel Silverstein',
    class: 'sidewalk',
});
booksArray.push({
    title:'Eragon by Christopher Paolini',
    class: 'eragon',
});
booksArray.push({
    title:'Virgin River by Robyn Carr',
    class: 'virgin',
});
booksArray.push({
    title:'Rules of Redemption by T.A. White',
    class: 'rules',
});
printBooks(booksArray);




