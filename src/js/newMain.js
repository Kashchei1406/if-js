import insertCards from './modules/insrertCards.js';

const guestsLoveContainer = document.getElementById('guests-love-container');

const getData = async () => {
  try {
    const response = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
    const result = await response.json();
    localStorage.setItem('hotels', JSON.stringify(result));

    return result;
  } catch (err) {
    console.error(err);
  }

  return null;
};

(function drawGuestsBlock() {
  const dataFromLocalStorage = localStorage.getItem('hotels');

  if (dataFromLocalStorage) {
    const hotels = JSON.parse(dataFromLocalStorage);
    insertCards(guestsLoveContainer, hotels);
  } else {
    insertCards(guestsLoveContainer, getData());
  }
}());