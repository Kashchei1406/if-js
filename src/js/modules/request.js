import { input, form } from './form.js';
import insertCards from './insrertCards.js';

const availableHotelsContent = document.getElementById('available-hotels-content');
const availableHotels = document.getElementById('available');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const destination = input.value.toLowerCase();
  input.value = '';

  fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${destination}`)
    .then((response) => response.json())
    .then((result) => {
      availableHotelsContent.innerHTML = '';

      insertCards(availableHotelsContent, result);

      availableHotels.style.display = 'flex';
    })
    .catch((err) => {
      console.log(err);
    });
});
