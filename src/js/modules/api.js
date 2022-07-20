import { popularUrl, url } from './config.js';
import { getParameters } from './modalWindowAmount.js';

export const searchResponse = async (destination) => {
  try {
    const response = await fetch(`${url}${destination}${getParameters()}`);

    return await response.json();
  } catch (err) {
    console.error(err);
  }

  return null;
};

export const getData = async () => {
  try {
    const response = await fetch(popularUrl);
    const result = await response.json();
    localStorage.setItem('hotels', JSON.stringify(result));

    return result;
  } catch (err) {
    console.error(err);
  }

  return null;
};
