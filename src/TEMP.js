function min(a, b) {
  return a < b ? a : b;
}

console.log(min(10, 20));

function palindrome(str) {
  return str.split(str).reverse().join(str);
}

console.log(palindrome('12345'));
