import { DateTime } from './luxon/time.js';

const siteDate = document.querySelector('.time');
const currentTime = () => {
  const theTime = DateTime.now();
  siteDate.innerHTML = `${theTime.c.day}/${theTime.c.month}/${theTime.c.year}`;
};

export default currentTime