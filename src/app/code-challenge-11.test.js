import { returnTen, findMax, totalSum, grandTotal, salesData } from './for-each.js';

test('returnTen should return the last 10 characters of a string as an array', () => {
  expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
  expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
});

test('findMax takes in a matrix of positive numbers and returns the number with the highest value', () => {
  expect(findMax([[13,24,24,2], [2,5,6], [2,3]])).toStrictEqual(24);
});

test('totalSum takes in a matrix of positive numbers and returns the sum of all the numbers', () => {
  expect(totalSum([[13,24,24,2], [2,5,6], [2,3]])).toStrictEqual(81);
  expect(totalSum([])).toStrictEqual(0);
});

test('grandTotal adds up the cookies sales for each hour of operation for all of the stores combined.', () => {
  expect(grandTotal([[13,24,24,2], [2,5,6], [2,3]])).toStrictEqual(24);
});

test('It should create an object of data for each store', () => {
  expect(salesData(hoursOpen, g