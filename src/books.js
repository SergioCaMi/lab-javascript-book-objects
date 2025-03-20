
// Iteration 1 | Books Array
// In the index.js file, create an array named booksArray containing 4 objects representing the books described in the code snippet below. Each object should have the following properties:

// title
// pages
// author
// details

// The values of the properties should be the same as the ones in the following code snippet:
// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }

console.log("Ejercicio 1");
let booksArray = [
  {
      title: "The Old Man and the Sea",
      pages: 128,
      author: "Ernest Hemingway",
      details: {
          language: "English",
          description: "One of Hemingway's most famous works, it tells the story of Santiago..."
      }
  },
  {
      title: "The Airbnb Story",
      pages: 256,
      author: "Leight Gallagher",
      details: {
          language: "English",
          description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
      }
  },
  {
      title: "Educated - A Memoir",
      pages: 352,
      author: "Tara Westover",
      details: {
          language: "English",
          description: "Educated is an account of the struggle for self-invention..."
      }
  },
  {
      title: "The Art of Learning",
      pages: 288,
      author: "Josh Waitzkin",
      details: {
          language: "English",
          description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
      }
  }
];
console.log(booksArray);

// Iteration 2 | Book Details
// Create a function named getBookDetails() that takes one argument - the book object. The function should return a string in the following format:

"TITLE - AUTHOR - PAGES pages"
// Iteration 2 | Book Details
console.log("Ejercicio 2");
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

booksArray.forEach((book, index) => {console.log(getBookDetails(book));});


// Iteration 3 | Delete Language
// Your code here:
console.log("Ejercicio 3");



// Iteration 4 | Estimated Reading Time
// Your code here:
console.log("Ejercicio 4");



// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
console.log("Ejercicio 5");
const dictionary = {
    "J. K. Rowling": [
        ["Harry Potter and the Philosopher's Stone", 223],
        ["Harry Potter and the Chamber of Secrets", 251],
        ["Harry Potter and the Prisoner of Azkaban", 317],
        ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
        ["Cryptonomicon", 928],
        ["Anathem", 1008],
        ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
        ["Outliers", 320],
        ["Blink", 287],
    ],
};

function booksByAuthor() {
  // Your code here:
  
}



// Bonus: Iteration 6 | Average Page Count
console.log("Ejercicio 6");
function averagePageCount() {
  // Your code here:
  
}
