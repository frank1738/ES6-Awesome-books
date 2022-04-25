/* eslint-disable import/prefer-default-export */
import { myLibrary } from './Library.js';

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
  window.location.reload();
};
