/**
 * @jest-environment jsdom
 */

import { changeColor } from '../examples/javaScript/functionsFortest';

document.body.innerHTML = `
    <p id="text1"></p>
    <p id="text2"></p>
    <p id="text3"></p>`;

const element1 = document.getElementById('text1');
const element2 = document.getElementById('text2');
const element3 = document.getElementById('text3');

const elements = [element1, element2, element3];
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const changeColor1 = changeColor(colors);
const changeColor2 = changeColor(colors);
const changeColor3 = changeColor(colors);

element1.addEventListener('click', changeColor1);
element2.addEventListener('click', changeColor2);
element3.addEventListener('click', changeColor3);

test('change color', async () => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
    const expectColor = elements[i].style.color;
    expect(expectColor).toBe('magenta');
  }

  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
    const expectColor = elements[i].style.color;
    expect(expectColor).toBe('cyan');
  }

  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
    const expectColor = elements[i].style.color;
    expect(expectColor).toBe('firebrick');
  }

  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
    const expectColor = elements[i].style.color;
    expect(expectColor).toBe('springgreen');
  }

  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
    const expectColor = elements[i].style.color;
    expect(expectColor).toBe('skyblue');
  }
});
