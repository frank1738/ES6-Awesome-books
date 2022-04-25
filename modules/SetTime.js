import { DateTime } from './luxon/time.js';
import { siteDate } from '../index.js';
export const currentTime = () => {
  const theTime = DateTime.now();
  console.log(theTime);
  siteDate.innerHTML = `${theTime.c.day}/${theTime.c.month}/${theTime.c.year}`;
};
