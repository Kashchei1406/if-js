const spanAdult = Array.from(document.getElementsByClassName('adults-count'));
const spanChildren = Array.from(document.getElementsByClassName('children-count'));
const spanRoom = Array.from(document.getElementsByClassName('rooms-count'));
const amount = document.getElementById('amount');
const modalWindowAmount = document.getElementById('modalAmount');
const btnAmount = modalWindowAmount.querySelectorAll('svg');
const liBabyAge = document.getElementById('li-baby-age');
const listSelects = Array.from(liBabyAge.querySelectorAll('select'));

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
  listSelects.forEach((select) => {
    if (select.dataset.index === `${childrenCount}`) select.remove();
  });
};

btnAmount.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const btnName = event.currentTarget.dataset.name;

    if (btnName === 'adult-minus' && adultsCount > 0) {
      adultsCount -= 1;
      spanAdult.forEach((el) => (el.innerText = adultsCount));
    }

    if (btnName === 'adult-plus' && adultsCount < 30) {
      adultsCount += 1;
      spanAdult.forEach((el) => (el.innerText = adultsCount));
    }

    if (btnName === 'children-minus' && childrenCount > 0) {
      childrenCount -= 1;

      childrenCount > 0 ? removeSelect() : (liBabyAge.style.display = 'none');

      spanChildren.forEach((el) => (el.innerText = childrenCount));
    }

    if (btnName === 'children-plus' && childrenCount < 10) {
      childrenCount > 0 ? addSelect() : (liBabyAge.style.display = 'flex');

      childrenCount += 1;
      spanChildren.forEach((el) => (el.innerText = childrenCount));
    }

    if (btnName === 'room-minus' && roomsCount > 0) {
      roomsCount -= 1;
      spanRoom.forEach((el) => (el.innerText = roomsCount));
    }

    if (btnName === 'room-plus' && roomsCount < 30) {
      roomsCount += 1;
      spanRoom.forEach((el) => (el.innerText = roomsCount));
    }
  });
});

const getChildrenAge = () => {
  const selects = Array.from(liBabyAge.querySelectorAll('select'));
  let selectValue = '';

  for (let i = 0; i < selects.length; i += 1) {
    if (i === selects.length - 1 || childrenCount === 1) {
      selectValue += `${selects[i].options.selectedIndex}`;
    } else selectValue += `${selects[i].options.selectedIndex},`;
  }

  return selectValue;
};

export function getParameters() {
  let parameters = '';

  if (adultsCount > 0) {
    parameters += `&adults=${adultsCount}`;

    if (childrenCount > 0) parameters += `&children=${getChildrenAge()}`;
  }

  if (roomsCount > 0) parameters += `&rooms=${roomsCount}`;

  return parameters;
}

export const resetAmount = () => {
  childrenCount = 0;
  adultsCount = 0;
  roomsCount = 0;
  spanRoom.forEach((el) => (el.innerText = roomsCount));
  spanChildren.forEach((el) => (el.innerText = childrenCount));
  spanAdult.forEach((el) => (el.innerText = roomsCount));
  listSelects.forEach((select) => {
    if (select.dataset.index > 0) select.remove();
  });
};
