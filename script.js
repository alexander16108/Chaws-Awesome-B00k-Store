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
    
    if(title === '' || author === '') {
      const bookList = document.querySelector('#bookList');
      const message = document.createElement('div');
      message.className = 'alert';
      message.textContent = 'Add a book';
      message.style.color = 'red';
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

      // clear the form
      title.value = '';
      author.value = '';
    }

    e.preventDefault();
  }

	removeBook(index) {
		const arr = [];
		this.book = arr;
		arr.splice(index, 1);
		localStorage.setItem('books', JSON.stringify(arr));
	}

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
			const line = document.createElement('hr');
			const removeButton = document.createElement('button');
			removeButton.classList.add('remove');
			removeButton.innerHTML = 'Remove';
			removeButton.addEventListener('click', () => bookStore.removeBook(
				bookElement.remove(),
			));
			bookElement.append(removeButton, line);
			booksList.appendChild(bookElement);
		});
	}
}

const bookStore = new BookStore();

// add a book to the array when the button is clicked
document.getElementById('add-btn').addEventListener('click', bookStore.addBook);

// create a window.onload event that renders the books to the DOM
window.onload = bookStore.displayBooks();