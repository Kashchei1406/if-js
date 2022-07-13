import insertCards from './modules/insrertCards.js';

const guestsLoveContainer = document.getElementById('guests-love-container');

(function getData() {
  fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
    .then((response) => response.json())
    .then((result) => {
      insertCards(guestsLoveContainer, result);
    })
    .catch((err) => {
      console.log(err);
    });
}());
