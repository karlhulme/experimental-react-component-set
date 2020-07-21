/* eslint-env jest */
const { calculatePadValue, calculateSpaceValue } = require('./whitespace')

test('The calculatePadValue returns valid CSS values when side is specified.', () => {
  expect(calculatePadValue(1, 1)).toEqual('0.50rem')
  expect(calculatePadValue(1, 2)).toEqual('1.00rem')
  expect(calculatePadValue(2, 2)).toEqual('2.00rem')
})

test('The calculatePadValue returns valid CSS values when all is specified.', () => {
  expect(calculatePadValue(1, null, 1)).toEqual('0.50rem')
  expect(calculatePadValue(1, null, 2)).toEqual('1.00rem')
  expect(calculatePadValue(2, null, 2)).toEqual('2.00rem')
})

test('The calculatePadValue returns valid CSS values when both side and all is specified.', () => {
  expect(calculatePadValue(1, 1, 3)).toEqual('0.50rem')
  expect(calculatePadValue(1, 2, 3)).toEqual('1.00rem')
  expect(calculatePadValue(2, 2, 3)).toEqual('2.00rem')
})

test('The calculateSpaceValue returns valid CSS values.', () => {
  expect(calculateSpaceValue(1, 1)).toEqual('0.50rem')
  expect(calculatePadValue(1, 2)).toEqual('1.00rem')
  expect(calculatePadValue(2, 2)).toEqual('2.00rem')
})
