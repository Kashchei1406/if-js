import insertCards from './modules/insrertCards.js';
import { getData, searchResponse } from './modules/api.js';
import scrollToResult from './modules/formHelpers.js';
import { availableHotels, availableHotelsContent, guestsLoveContainer } from './constants/objectConstants.js';
import { resetAmount } from './modules/modalWindowAmount.js';
import { form, input } from './constants/formConstant.js';

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

  const response = await searchResponse(destination);
  availableHotelsContent.innerHTML = '';
  insertCards(availableHotelsContent, response);

  form.reset();
  resetAmount();
  availableHotels.style.display = 'flex';
  scrollToResult();
});
