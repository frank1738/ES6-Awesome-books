import { currentTime } from './modules/SetTime.js';
import { Select } from './modules/SelectMenu.js';
import { addBook } from './modules/AddBook.js';
import { myLibrary } from './modules/Library.js'; 

const bookSection = document.querySelector('.book-list');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const addBtn = document.querySelector('#submit');
const navItems = document.querySelectorAll('.link');
const newBook = document.querySelector('.add-new');
const contactSection = document.querySelector('.contact-information');
const homePage = document.querySelector('.books-container');
const linkItems = document.querySelectorAll('.link');
const homeLink = document.querySelector('.home');
const addLink = document.querySelector('.add');
const contactLink = document.querySelector('.contact-link');
linkItems.forEach((item) => {
  item.addEventListener('click', Select);
});

myLibrary.createBook();
currentTime();

addBtn.addEventListener('click', addBook);

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    Select(e.target.innerText);
  });
});
export {
  homePage,
  contactSection,
  newBook,
  bookSection,
  bookTitle,
  bookAuthor,
  myLibrary,
  homeLink,
  contactLink,
  addLink,
};
