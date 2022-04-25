/* eslint-disable import/prefer-default-export */ /* eslint-disable import/prefer-default-export */
import { DateTime } from './luxon/time.js';

const siteDate = document.querySelector('.time');
export const currentTime = () => {
  const theTime = DateTime.now().toFormat("ff' UTC'Z");
  siteDate.innerHTML = theTime;
};
