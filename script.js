// call elements
const collection = document.querySelector('#collection'),
      title = document.querySelector('#title'),
      author = document.querySelector('#author'),
      addBtn = document.querySelector('#add-btn');
      removeBtn = '<input type="submit" value="Remove" id="remove">';

let library = [];

// book details
function Book(bookTitle, bookAuthor) {
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
}

let book = new Book()
book.bookTitle = title.value;
book.bookAuthor = author.value;

// create book
function createBook() {
  // create li
  const li = document.createElement('li');
  li.className = "item";

  li.innerHTML =`&nbsp;"${book.bookTitle}"&nbsp;by&nbsp;&nbsp;${book.bookAuthor}&nbsp;&nbsp;${removeBtn}<br><br><hr>`;

  // add to ul
  collection.appendChild(li);
  library.push(book);
}

// display book 
function displayBook(e) {
  createBook();

  // add to local storage
  let bookDetails = JSON.stringify(library);
  localStorage.setItem('Library', bookDetails);

  // clear input field
  title.value = '';
  author.value = '';

  console.log(library);

  e.preventDefault();
}

function removeBook(e) {
  if(e.target.parentElement.parentElement.classList.contains('collection')) {
    e.target.parentElement.remove();
  }
  e.preventDefault;
}

// all event listeners
function allEventListeners() {
  // add book
  addBtn.addEventListener('click', displayBook);
  // remove books
  collection.addEventListener('click', removeBook);
}

allEventListeners();