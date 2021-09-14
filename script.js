let Library = null;
function displayBooks() {
  const section = document.getElementById('bookList');
  const container = document.createElement('ul');
  container.id = 'container';
  Library.forEach((content) => {
    const { title } = content;
    const { id } = content;
    const liId = `li${title}`;
    const bookCard = `<li id=${liId}>
      <div class="text">
      <h6>${content.title}</h6>
      <h6>${content.author}</h6>
      </div>
      <button id=${id} onclick="removebook(${id})" class="remove">Remove</button>
      </li>
      <hr>`;
    container.insertAdjacentHTML('beforeend', bookCard);
  });
  section.innerHTML = '';
  section.appendChild(container);
}
function updateLocalStorage(remove) {
  if (!remove) {
    if (Library === null) {
      Library = JSON.parse(localStorage.getItem('Library'));
    }
  }
  localStorage.setItem('Library', JSON.stringify(Library));
  displayBooks();
}
function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const date = new Date();
  const id = date.getMilliseconds();
  let found = null;
  if (!Library) {
    Library = [];
  }
  if (Library && title !== '') {
    Library.forEach((content) => {
      if (content.title === title) {
        found = true;
        document.getElementById('addBookStatus').innerHTML = 'Book Already Exist';
      }
    });
    if (!found && title !== '') {
      const content = { title, author, id };
      Library.push(content);
      Library.sort((bookA, bookB) => {
        const titleA = bookA.title.toLowerCase();
        const titleB = bookB.title.toLowerCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
      updateLocalStorage(false);
    }
  }
}
function removebook(id) { // eslint-disable-line no-unused-vars
  const template = [];
  Library.forEach((content) => {
    if (content.id !== id) {
      temp.push(content);
    }
  });
  Library = template;
  updateLocalStorage(true);
}

document.addEventListener('DOMContentLoaded', () => {
  const btnAdd = document.getElementById('add-btn');
  btnAdd.addEventListener('click', () => { addBook(); },
    false,);
});
updateLocalStorage(false);