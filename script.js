// create an empty array
let books = [];

// create a function that adds a book to the array
const addBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    // create a new book object to hold multiple values
    const book = {
        title,
        author,
    };

    // add books to the array
    books.push(book);

    // get the current books from local storage
    const currentBooks = JSON.parse(localStorage.getItem('books'));

    // add the new book to the array
    currentBooks.push(book);

    // add the new books to local storage
    localStorage.setItem('books', JSON.stringify(currentBooks));

    // clear the form
    title.value = '';
    author.value = '';

};


// create a function to remove a book from the array
const removeBook = (index) => {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
};

// create a function to display the books in local storage
const displayBooks = () => {
    
    // check if there are any books in local storage
    if (localStorage.getItem('books') === null) {
        // if there are no books in local storage create an empty array
        localStorage.setItem('books', JSON.stringify([]));
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    const booksList = document.getElementById('collection');

    booksList.innerHTML = '';

    books.forEach((book) => {
        const bookElement = document.createElement('li');
        bookElement.classList.add('item');
        bookElement.innerHTML = `${book.title} by ${book.author}`;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.innerHTML = 'Remove';
        removeButton.addEventListener('click', () => removeBook(
            booksList.remove()
        ));

        bookElement.appendChild(removeButton);
        booksList.appendChild(bookElement);
    });
};

// add a book to the array when the button is clicked
document.getElementById('add-btn').addEventListener('click', addBook);

// create a window.onload event that renders the books to the DOM
window.onload = displayBooks();
