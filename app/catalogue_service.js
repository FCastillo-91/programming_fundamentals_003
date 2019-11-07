// eslint-disable-next-line no-unused-vars
const catalogue = [
  {
    title: "The Catcher in the Rye",
    author: "JD Salinger",
    stock: 10,
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    stock: 0
  },
  {
    title: "Between the Assassinations",
    author: "Aravind Adiga",
    stock: 9
  },
  {
    title: "Wolf Hall",
    author: "Hilary Mantel",
    stock: 33
  },
  {
    title: "Bring Up The Bodies",
    author: "Hilary Mantel",
    stock: 11
  },
  {
    title: "A Place of Greater Safety",
    author: "Hilary Mantel",
    stock: 11
  },
  {
    title: "Giving Up the Ghost",
    author: "Hilary Mantel",
    stock: 8
  },
  {
    title: "The Assassination of Margaret Thatcher",
    author: "Hilary Mantel",
    stock: 43
  },
  {
    title: "The Yellow Wallpaper ",
    author: "Charlotte Perkins Gilman",
    stock: 12
  },
  {
    title: "Conversations With Friends",
    author: "Sally Rooney",
    stock: 1
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    stock: 2
  },
  {
    title: "Everything I Never Told You",
    author: "Celeste Ng",
    stock: 6
  },
  {
    title: "2666",
    author: "Robert Bolaño",
    stock: 17
  },
  {
    title: "By Night In Chile",
    author: "Robert Bolaño",
    stock: 8
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    stock: 3
  },
  {
    title: "Oliver Twist",
    author: "Charles Dickens",
    stock: 7
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    stock: 1
  },
  {
    title: "The Blind Assassin",
    author: "Margaret Atwood",
    stock: 8
  },
  {
    title: "Why Be Happy When You Could Be Normal?",
    author: "Jeanette Winterson",
    stock: 19
  },
  {
    title: "The Origin of Species",
    author: "Charles Darwin",
    stock: 50
  },
 ];

function countBooksByAuthor(author) {
  
  var count = 0;
    
  for (let i = 0; i < catalogue.length; i++) {
    
    if (catalogue[i].author === author)
      
    count++
  }
    return count ++
}

function checkBookByTitle(title) {
  
  for (let i = 0; i < catalogue.length; i++) {
    
    if (catalogue [i].title === title)
    
    return true
  }

    return false
}
 
function countBooksByFirstLetter(letter) {
  
  var count = 0;
  
  for (let i = 0; i < catalogue.length; i++) {
    
    const books = catalogue[i].title.toLowerCase();
    const firstChar = books [0];
    
    if (firstChar === letter.toLowerCase())
    
    count ++
  }

   return count ++
}

function getQuantity(title) {

  for (let i = 0; i < catalogue.length; i++) {
    
    const book = catalogue[i];
  
    if (book.title === title) {
    
      return book.stock    
    }
  }
  
  return "This book doesn't exist"
}

function getBooksByAuthor(author) {
  
  var listOfBooks = []
  
  for (let i = 0; i < catalogue.length; i++) {
      
    const book = catalogue[i];

      if (book.author === author) {
        listOfBooks.push(book);
      }
  }
  
  return listOfBooks
 }

function checkQuantity(title, stock) {
  // Call a book title
  // Pass it through the list 
  for (let i = 0; i < catalogue.length; i++) {

    // Allocate a variable to the object 
    const book = catalogue[i];
    // If title of book === title called && stock called through action is equal to or less than book.stock return true
    if (book.title === title && stock <= book.stock) {
      return true
    }
  }
    //If not return false outside the loop
    return false;
}

 countBooksByAuthor("Sally Rooney");
 checkBookByTitle("Everything I Never Told You");
 countBooksByFirstLetter("t");
 getQuantity ("The Origin of Species");
 getBooksByAuthor("Jeanette Winterson");
 checkQuantity("By Night in Chile", 4)

 module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
 }; 
