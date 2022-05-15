/**
 * @jest-environment jsdom
 */

import {changeColor} from '../src/functionsFortest.js';


document.body.innerHTML ='' +
    '<p id="text1"></p>\n' +
    '<p id="text2"></p>\n' +
    '<p id="text3"></p>\n'

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const testChangeColor = changeColor(colors);
describe('test changeColor function',()=>{
    const element1 = document.getElementById('text1');
    const element2 = document.getElementById('text2');

    const element3 = document.getElementById('text3');
    const elements = [element1, element2, element3];

    test('change color to magenta', async () =>{

        for (let i = 0; i < elements.length; i++) {
            elements[i].click();
            testChangeColor(elements[i]);
            const expectColor = elements[i].style.color
            expect(expectColor).toBe('magenta')
        }
    })
})