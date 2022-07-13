import createCard from './createCard.js';

export default function insertCards(block, elements) {
  const amountElements = elements.length;

  if (amountElements <= 4) {
    for (let i = 0; i < amountElements; i += 1) {
      block.innerHTML += createCard(elements[i]);
    }
    return;
  }

  if (amountElements > 4) {
    for (let i = 0; i < 4; i += 1) {
      block.innerHTML += createCard(elements[i]);
    }
    return;
  }

  block.innerHTML = `
        <h3 style="margin: 0 auto; font-size: 34px">Sorry, not found result, try again</h3>`;
}