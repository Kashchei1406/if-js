import { dataHotels } from './arrays.js';

const guestsLoveContainer = document.getElementById('guests-love-container');

const createElements = () => {
  for (let i = 0; i < 4; i += 1) {
    const {
      id, name, city, country, imageUrl,
    } = dataHotels[i];
    guestsLoveContainer.innerHTML += `
        <div id="${id}" class="guests-loves-column column-item col-3 col-md-6">
            <div class="guests-loves-item-image">
                <img alt="${name}" src="${imageUrl}" />
            </div>
            <div class="guests-loves-image-text img-text">
               <a href="#">${name}</a>
            </div>
            <div class="guests-loves-hotel-destination">
                <a href="#">${country}, ${city}</a>
            </div>
        </div>  
        `;
  }
};

createElements();
