import { bookAuthor, bookTitle, myLibrary } from '../index.js';
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
