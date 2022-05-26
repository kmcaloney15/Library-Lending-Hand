// ------------ Global Variables ---------------------------------------/
const gameboard = document.querySelector(".gameboard");
const playerLivesCount = document.querySelector("span");
//how many lives they start with
let playerLives = 10;
let matchedBookCount = 0;
let hasFlippedBook = false;
let firstFlip;
let secondFlip;
let clickLimit = false;
playerLivesCount.textContent = playerLives;
let booksArray = [];
// booksArray.push({
//     imgSrc:
//     "img/virgin-river.jpg",
//     class: "virgin",
// });
booksArray.push({
    imgSrc:
    "img/eragon.jpeg",
    class: "eragon",
});
booksArray.push({
    imgSrc:
    "img/sidewalk.jpeg",
    class: "sidewalk",
});
booksArray.push({
    imgSrc: "img/rules-of-redemption.jpg",
    class: "rules",
});
booksArray.push({
    imgSrc: "img/lotr.jpeg",
    class: "lotr",
});
booksArray.push({
    imgSrc: "img/harry-potter.jpg",
    class: "hp",
});
booksArray.push({
    imgSrc: "img/bookshop-on-the-corner.jpeg",
    class: "bookshop",
});
booksArray.push({
    imgSrc: "img/pride-and-prejudice.jpeg",
    class: "pride",
});
booksArray.push({
    imgSrc: "img/clean-sweep.jpeg",
    class: "sweep",
});


let doubleBooks = [];
createsDoubleBooksArray(booksArray);
shuffleArray(doubleBooks);
printBooks();

const books = document.querySelectorAll(".book");

//  -------------------------- Event Listeners -------------------------/

books.forEach((book) => {
  book.addEventListener("click", flipBook);
});

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
  //   console.log(clickLimit);

  this.classList.add("flip");
  // hasFlippedBook = true;
  //if hasFlippedBook is false - then it's the first time a player has clicked the book
  if (hasFlippedBook === false) {
    //first click
    hasFlippedBook = true;
    firstFlip = this;
  } else {
    hasFlippedBook = false;
    secondFlip = this;

    // look for matching books
    //if match
    checkMatch();
  }
}

//put each function seperate, then call function in main one
function checkMatch() {
  if (firstFlip.classList[1] === secondFlip.classList[1]) {
    disableFlip();
    matchedBookCount++;
    console.log(matchedBookCount);
   setTimeout(checkWin, 1000);
  } else {
    unflipBooks();
    //take away a life
    playerLives--;
    playerLivesCount.textContent = playerLives;
    setTimeout(endGame, 1000);
    // console.log(playerLives)
    //play ring sound
  }
}

function disableFlip() {
  firstFlip.removeEventListener("click", flipBook);
  secondFlip.removeEventListener("click", flipBook);
  console.log("matched pair");
}

function unflipBooks() {
  //clickLimit = true here so that they can only click on the books after they have been flipped
  clickLimit = true;
  //   console.log(clickLimit);
  //not a match
  setTimeout(function () {
    firstFlip.classList.remove("flip");
    secondFlip.classList.remove("flip");

    clickLimit = false;
  }, 1500);
}

function restartGame() {
  hasFlippedBook = false;
}


//creates duplicate books to be randomized
function createsDoubleBooksArray(array) {
  for (let i = 0; i < array.length; i++) {
    doubleBooks.push(array[i]);
    doubleBooks.push(array[i]);
  }
}

//shuffles the books in the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  // console.log(array);
}
//recreate the book divs here in js and print them in html
function printBooks() {
  //loop through to create the div
  let bookElement = "";
  doubleBooks.forEach((book) => {
    bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.classList.add(book.class);
    // console.log(bookElement.classList);
    //add the divs that surround the front and back images
    divFront = document.createElement("div");
    divBack = document.createElement("div");
    divFront.classList = "front";
    divBack.classList = "back";

    //creating the front and back of the books with the images
    const newBookFront = document.createElement("img");
    newBookFront.src = "img/closed-book-green.png"
    newBookFront.classList = 'frontImg'
    const newBookBack = document.createElement("img");
    newBookBack.classList = "testing"

       //attach the image files to the front and back
    newBookBack.src = book.imgSrc;
    console.log(book.imgSrc)

    //need to append newly created books to gameboard section
    gameboard.appendChild(bookElement);
    bookElement.appendChild(divFront);
    bookElement.appendChild(divBack);
    divFront.appendChild(newBookFront);
    divBack.appendChild(newBookBack);
  });
}

function checkWin(){
    if (matchedBookCount === 8){
        alert("You won!");
    }
}

function endGame(){
    if (playerLives === 0){
        alert("Game over")
    }
};





