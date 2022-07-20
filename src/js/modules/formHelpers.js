import { input, inputPlaceholder } from '../constants/formConstant.js';

input.addEventListener('focus', () => {
  input.placeholder = '';
});

input.addEventListener('blur', () => {
  input.placeholder = inputPlaceholder;
});

export default function scrollToResult() {
  const headerHeight = getComputedStyle(document.getElementsByTagName('header')[0]).height;
  window.scrollTo({
    top: parseInt(headerHeight, 10),
    behavior: 'smooth',
  });
}
