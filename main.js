// ------------ Global Variables ---------------------------------------/

const books = document.querySelectorAll(".book");

let hasFlippedBook = false;
let firstFlip;
let secondFlip;

//---------------------- FUNCTIONS ------------------------------------/

function flipBook() {
  this.classList.add("flip");
    // console.log('this was clicked')
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
  

// look for matching books
console.log(firstFlip.classList[1]);
//if match  
if (firstFlip.classList[1] === secondFlip.classList[1]){
    firstFlip.removeEventListener('click', flipBook);
    secondFlip.removeEventListener('click', flipBook);
    console.log('function ran')
  } else {
      //not a match
      setTimeout(function(){
          firstFlip.classList.remove('flip');
          secondFlip.classList.remove('flip');
    }, 1500)
      
  }

  }

}

//  -------------------------- Event Listeners -------------------------/


books.forEach(book => {
     book.addEventListener('click', flipBook)
    });
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach