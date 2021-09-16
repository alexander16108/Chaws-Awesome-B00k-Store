import { DateTime } from './luxon.js';

class BookStore {
  constructor() {
    this.books = [];
  }

  addBook(e) {
    const arr = [];
    this.book = arr;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    // create a new book class to hold multiple values
    const book = {
      title,
      author,
    };

    const bookList = document.querySelector('#bookList');
    const message = document.createElement('div');
    message.className = 'alert';
    message.textContent = 'book has been added';
    message.style.color = 'white';
    message.style.textAlign = 'center';
    bookList.appendChild(message);

    if (title === '' || author === '') {
      message.className = 'alert';
      message.textContent = 'Add a book';
      message.style.background = 'red';
      bookList.appendChild(message);
      setTimeout(() => {
        document.querySelector('.alert').remove();
      }, 3000);
    } else {
      // add books to the array
      arr.push(book);
      // get the current books from local storage
      const currentBooks = JSON.parse(localStorage.getItem('books'));

      // add the new book to the array
      currentBooks.push(book);

      // add the new books to local storage
      localStorage.setItem('books', JSON.stringify(currentBooks));

      message.className = 'alert';
      message.textContent = 'You have added a book!';
      message.style.color = 'green';
      message.style.background = 'white';
      bookList.appendChild(message);
      setTimeout(() => {
        document.querySelector('.alert').remove();
      }, 3000);

      // clear the form
      title.value = '';
      author.value = '';
    }
    e.preventDefault();
  }

  /* eslint-disable */
  removeBook(index) {
    const bookList = document.querySelector('#bookList');
    const message = document.createElement('div');
    message.className = 'alert';
    message.textContent = 'Book has been removed';
    message.style.background = 'green';
    bookList.appendChild(message);
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
    const currentBooks = JSON.parse(localStorage.getItem('books'));

    currentBooks.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(currentBooks));
  }
  
/* eslint-enable */

  displayBooks() {
    let arr = [];
    const bookStore = new BookStore();
    this.book = arr;
    // check if there are any books in local storage
    if (localStorage.getItem('books') === null) {
      // if there are no books in local storage create an empty array
      localStorage.setItem('books', JSON.stringify([]));
    } else {
      arr = JSON.parse(localStorage.getItem('books'));
    }
    const booksList = document.getElementById('collection');

    booksList.innerHTML = '';

    arr.forEach((book) => {
      const bookElement = document.createElement('li');
      bookElement.classList.add('item');
      bookElement.innerHTML = `"${book.title}" by ${book.author}`;
      const removeButton = document.createElement('button');
      removeButton.classList.add('remove');
      removeButton.innerHTML = 'Remove';
      removeButton.addEventListener('click', () => bookStore.removeBook(
        bookElement.remove(),
      ));
      bookElement.append(removeButton);
      booksList.appendChild(bookElement);
    });
  }
}

const bookStore = new BookStore();

// add a book to the array when the button is clicked
document.getElementById('add-btn').addEventListener('click', bookStore.addBook);

// create a window.onload event that renders the books to the DOM
window.onload = bookStore.displayBooks();

// set time and date
function setTimeDate() {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  document.querySelector('.date').innerHTML = now;
}

setTimeDate();