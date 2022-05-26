export function palindrome(str) {
  const reversStr = str.toLowerCase().split('').reverse().join('');
  return str === reversStr;
}

export function min(a, b) {
  return a < b ? a : b;
}

export function max(a, y) {
  return a > y ? a : y;
}

function sumFun() {
  return (a) => {
    if (a !== undefined) {
      return (b) => {
        if (b !== undefined) {
          return a + b;
        }
        return a;
      };
    }
    return null;
  };
}

export const sum1 = sumFun();

export const changeColor = (colors) => {
  let i = 0;

  return (event) => {
    /* eslint-disable */
    event.target.style.color = colors[i];
    /* eslint-disable */
    i += 1;
    if (i >= colors.length) i = 0;
  };
};
