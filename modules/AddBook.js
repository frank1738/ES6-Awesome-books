/* eslint-disable import/prefer-default-export */
import { myLibrary } from './Library.js';
const newBook = document.querySelector('.add-new');
const homePage = document.querySelector('.books-container');
const homeLink = document.querySelector('.home');
const addLink = document.querySelector('.add');

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
export const addBook = (e) => {
  e.preventDefault();
  if (bookTitle.value === '' || bookAuthor.value === '') {
    return;
  }
  myLibrary.addBook(bookTitle, bookAuthor);
  localStorage.setItem('book-collection', JSON.stringify(myLibrary.library));
  bookTitle.value = '';
  bookAuthor.value = '';
  newBook.classList.add('hide');
  homePage.classList.remove('hide');
  homeLink.classList.add('select');
  addLink.classList.remove('select');
};
