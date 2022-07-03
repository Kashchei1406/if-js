const spanAdult = Array.from(document.getElementsByClassName('adults-count'));
const spanChildren = Array.from(document.getElementsByClassName('children-count'));
const spanRoom = Array.from(document.getElementsByClassName('rooms-count'));
const amount = document.getElementById('amount');
const modalWindowAmount = document.getElementById('modalAmount');
const btnAmount = modalWindowAmount.querySelectorAll('svg');
const liBabyAge = document.getElementById('li-baby-age');

let childrenCount = 0;
let roomsCount = 0;
let adultsCount = 0;

amount.addEventListener('click', (event) => {
  modalWindowAmount.classList.toggle('modal--visible');
  event.stopPropagation();

  if (modalWindowAmount.classList.contains('modal--visible')) {
    modalWindowAmount.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    document.body.addEventListener('click', () => {
      modalWindowAmount.classList.remove('modal--visible');
    });
  }
});

const addSelect = () => {
  const cloneSelect = document.getElementById('baby-age').cloneNode(true);

  cloneSelect.dataset.index = childrenCount;
  liBabyAge.insertAdjacentElement('beforeend', cloneSelect);
};

const removeSelect = () => {
  const listSelects = Array.from(liBabyAge.querySelectorAll('select'));

  listSelects.forEach((select) => {
    if (select.dataset.index === `${childrenCount}`) select.remove();
  });
};

btnAmount.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    if (event.currentTarget.dataset.name === 'adult-minus' && adultsCount > 0) {
      adultsCount -= 1;
      spanAdult.forEach((el) => (el.innerText = adultsCount));
    }

    if (event.currentTarget.dataset.name === 'adult-plus' && adultsCount < 30) {
      adultsCount += 1;
      spanAdult.forEach((el) => (el.innerText = adultsCount));
    }

    if (event.currentTarget.dataset.name === 'children-minus' && childrenCount > 0) {
      childrenCount -= 1;

      childrenCount > 0 ? removeSelect() : (liBabyAge.style.display = 'none');

      spanChildren.forEach((el) => (el.innerText = childrenCount));
    }

    if (event.currentTarget.dataset.name === 'children-plus' && childrenCount < 10) {
      childrenCount > 0 ? addSelect() : (liBabyAge.style.display = 'flex');

      childrenCount += 1;
      spanChildren.forEach((el) => (el.innerText = childrenCount));
    }

    if (event.currentTarget.dataset.name === 'room-minus' && roomsCount > 0) {
      roomsCount -= 1;
      spanRoom.forEach((el) => (el.innerText = roomsCount));
    }

    if (event.currentTarget.dataset.name === 'room-plus' && roomsCount < 30) {
      roomsCount += 1;
      spanRoom.forEach((el) => (el.innerText = roomsCount));
    }
  });
});
