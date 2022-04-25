const homePage = document.querySelector('.books-container');
const homeLink = document.querySelector('.home');
const addLink = document.querySelector('.add');
const contactLink = document.querySelector('.contact-link');
const newBook = document.querySelector('.add-new');
const contactSection = document.querySelector('.contact-information');
const Select = (key) => {
  if (key === 'List') {
    homePage.classList.remove('hide');
    newBook.classList.add('hide');
    contactSection.classList.add('hide');
    homeLink.classList.add('select');
    addLink.classList.remove('select');
    contactLink.classList.remove('select');
  }
  if (key === 'Add new') {
    homePage.classList.add('hide');
    newBook.classList.remove('hide');
    contactSection.classList.add('hide');
    homeLink.classList.remove('select');
    addLink.classList.add('select');
    contactLink.classList.remove('select');
  }
  if (key === 'Contact') {
    homePage.classList.add('hide');
    contactSection.classList.remove('hide');
    newBook.classList.add('hide');
    homeLink.classList.remove('select');
    addLink.classList.remove('select');
    contactLink.classList.add('select');
  }
};

export default Select;
