export const form = document.forms.main;
export const input = form.hotel;
const inputPlaceholder = input.placeholder;
export const availableHotelsContent = document.getElementById('available-hotels-content');
export const availableHotels = document.getElementById('available');

input.addEventListener('focus', () => {
  input.placeholder = '';
});

input.addEventListener('blur', () => {
  input.placeholder = inputPlaceholder;
});

export const scrollToResult = () => {
  const headerHeight = getComputedStyle(document.getElementsByTagName('header')[0]).height;
  window.scrollTo({
    top: parseInt(headerHeight, 10),
    behavior: 'smooth',
  });
};
