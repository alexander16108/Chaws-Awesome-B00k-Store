// call elements
const collection = document.querySelector('#collection'),
      title = document.querySelector('#title'),
      author = document.querySelector('#author'),
      addBtn = document.querySelector('#add-btn');
      removeBtn = '<input type="submit" value="Remove" id="remove">';

let library = [];

// create book
function createBook() {
  // book details
  function Book(bookTitle, bookAuthor) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
  }
  
  this.bookTitle = title.value;
  this.bookAuthor = author.value;

  // create li
  const li = document.createElement('li');
  li.className = "item";

  li.innerHTML =`&nbsp;"${this.bookTitle}"&nbsp;by&nbsp;&nbsp;${this.bookAuthor}&nbsp;&nbsp;${removeBtn}`;

  // add to ul
  collection.appendChild(li);
}

// display book 
function displayBook(e) {
  createBook();

  // add book to library
  // library.push(book);

  // add to local storage
  let bookDetails = JSON.stringify(library);
  localStorage.setItem('Library', bookDetails);

  // clear input field
  this.bookTitle = '';
  this.bookAuthor = '';

  e.preventDefault();
}

// all event listeners
function allEventListeners() {
  // add book
  addBtn.addEventListener('click', displayBook);
}

allEventListeners();