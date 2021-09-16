const list = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.navContact');
const listSec = document.querySelector('#bookList');
const addSec = document.querySelector('#add_book');
const contactSec = document.querySelector('#contact');

// display list section
function displayList() {
  listSec.style.display = 'block';
  addSec.style.display = 'none';
  contactSec.style.display = 'none';
}

// display add section
function displayAdd() {
  listSec.style.display = 'none';
  addSec.style.display = 'block';
  contactSec.style.display = 'none';
}

// display add section
function displayContact() {
  listSec.style.display = 'none';
  addSec.style.display = 'none';
  contactSec.style.display = 'block';
}

function allEventListeners() {
  add.addEventListener('click', displayAdd);
  list.addEventListener('click', displayList);
  contact.addEventListener('click', displayContact);
}

allEventListeners();