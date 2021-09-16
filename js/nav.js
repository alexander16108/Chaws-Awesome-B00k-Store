const list = document.querySelector('.list'),
  add = document.querySelector('.add'),
  contact = document.querySelector('.navContact'),
  listSec = document.querySelector('#bookList'),
  addSec = document.querySelector('#add_book'),
  contactSec = document.querySelector('#contact'),
  date = document.querySelector('.date');

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