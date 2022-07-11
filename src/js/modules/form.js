export const form = document.forms.main;
export const input = form.hotel;
const inputPlaceholder = input.placeholder;

input.addEventListener('focus', () => {
  input.placeholder = '';
});

input.addEventListener('blur', () => {
  input.placeholder = inputPlaceholder;
});
