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
      description:
        "One of Hemingway's most famous works, it tells the story of Santiago...",
    },
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description:
        "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    },
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description:
        "Educated is an account of the struggle for self-invention...",
    },
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description:
        "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    },
  },
];
console.log(booksArray);

// Iteration 2 | Book Details
// Create a function named getBookDetails() that takes one argument - the book object. The function should return a string in the following format:

("TITLE - AUTHOR - PAGES pages");
// Iteration 2 | Book Details
console.log("Ejercicio 2");
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

booksArray.forEach((book, index) => {
  console.log(getBookDetails(book));
});

// Iteration 3 | Delete Language
// Iterate over the booksArray, and delete the nested object property language from each book object.
// Once done, console.log the booksArray array to confirm that the property has been deleted from all the book objects.

// Note: You shouldn't change the booksArray manually, but instead, you should iterate over the array and delete the property from each book object.
// Iteration 3 | Delete Language
// Your code here:
console.log("Ejercicio 3");

booksArray.forEach((book, index) => {
  delete book.details.language;
});
console.log(booksArray);

// Iteration 4 | Estimated Reading Time
// Iterate over the booksArray, and add a new property readingTime to each book object.
// The value of the readingTime should be the number of minutes it will take to read the book. The number of minutes should be an integer (i.e., no decimals).

// Assuming a page consists of 500 words and that the average reader reads 90 words per minute, the estimated reading time for a book can be calculated using the following formula:

// reading time in minutes = (number of pages * 500) / 90

// The reading time must be rounded UP to the next whole number, even if the result is a small decimal. For example:

// If the result is 711.1, round it up to 712.
// If the result is 30.03, round it up to 31.
// Once done, console.log the booksArray to confirm that the property has been added to each book object.
// Iteration 4 | Estimated Reading Time
// Your code here:
console.log("Ejercicio 4");
// (número de páginas * 500) / 90
booksArray.forEach((book, index) => {
  book.readingTime = Math.ceil((book.pages * 500) / 90);
});
console.log(booksArray);

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

// return an array containing the book objects with the properties :
// title - the title of the book (first element of the array)
// pages - the number of pages of the book (second element of the array)
// author - the author of the book (the dictionary key)

// Forma 1

// function booksByAuthor(dictionary) {
//   const books = []
//   for (const author in dictionary) {
//     dictionary[author].forEach((book) => {
//       const bookInfo = {
//         title:dictionary[author][0][0],
//         pages: dictionary[author][0][1],
//         author: author,
//       }
//       books.push(bookInfo);
//     });
//   }
//   console.log(books);
//   return books;
// }

// Forma 2

function booksByAuthor(dictionary) {
  const books = []
  Object.keys(dictionary).forEach((author) => {//Recorremos el array de claves
    dictionary[author].forEach((book) => { //Recorremos el array de cada objeto
      const bookInfo = {
        title: book[0],
        pages: book[1],
        author: author,
      } 
      books.push(bookInfo);
    });
  });
  return books;
}

booksByAuthor(dictionary);



// Bonus: Iteration 6 | Average Page Count
// Create a function named averagePageCount() that takes one argument - the books array. The function should return a number representing the average page count of all the books in the array.

// The formula to calculate the average page count is:average page count = sum of all books' pages / number of books

// Bonus: Iteration 6 | Average Page Count
console.log("Ejercicio 6");
function averagePageCount(booksArray) {
  // Your code here:
  let count = 0;
  
  
  for (let book of booksArray){
    count += book.pages;
  }
  return count / booksArray.length;

}


console.log("Promedio de paginas:" + averagePageCount(booksArray));