import {
  palindrome, min, max, sum1,
} from '../js/functionsFortest';

describe('test palindrome', () => {
  test('palindrome positive', () => {
    const str = 'abba';
    expect(palindrome(str)).toBe(true);
  });
  test('palindrome negative', () => {
    const str = 'palindrome';
    expect(palindrome(str)).toBe(false);
  });
});

test('function min which returns minimal number', () => {
  expect(min(5, 10)).toBe(5);
});

test('function min which returns maximal number', () => {
  expect(max(5, 10)).toBe(10);
});

describe('tet sum function wit closers', () => {
  test('sum with two params', () => {
    expect(sum1(5)(2)).toBe(7);
  });
  test('sum with one param', () => {
    expect(sum1(5)()).toBe(5);
  });
  test('sum without params', () => {
    expect(sum1()).toBeNull();
  });
});
