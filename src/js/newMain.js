import insertCards from './modules/insrertCards.js';
import {
  getData, searchResponse, availableHotels, availableHotelsContent, headerHeight,
} from './modules/api.js';
import { form, input } from './modules/form.js';
import { resetAmount } from './modules/modalWindowAmount.js';

const guestsLoveContainer = document.getElementById('guests-love-container');

(async function drawGuestsBlock() {
  const dataFromLocalStorage = localStorage.getItem('hotels');

  if (dataFromLocalStorage) {
    const hotels = JSON.parse(dataFromLocalStorage);

    insertCards(guestsLoveContainer, hotels);

    return;
  }

  const result = await getData();
  insertCards(guestsLoveContainer, result);
}());

form.addEventListener('submit', async (event) => {
  const destination = input.value.toLowerCase();
  event.preventDefault();
  form.reset();

  const response = await searchResponse(destination);
  availableHotelsContent.innerHTML = '';
  resetAmount();
  insertCards(availableHotelsContent, response);

  availableHotels.style.display = 'flex';
  window.scrollTo({
    top: parseInt(headerHeight, 10),
    behavior: 'smooth',
  });
});
