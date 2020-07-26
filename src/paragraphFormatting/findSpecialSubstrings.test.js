/* eslint-env jest */
const { findSpecialSubstrings } = require('./findSpecialSubstrings')

test('Find a code element.', () => {
  const text = 'this text contains an `amount` property.'

  expect(findSpecialSubstrings(text)).toEqual([{
    type: 'code',
    content: 'amount',
    start: 22,
    end: 29
  }])
})

test('Find a field type element.', () => {
  const text = 'this text contains a %%currencyCode%% reference.'

  expect(findSpecialSubstrings(text)).toEqual([{
    type: 'fieldType',
    content: 'currencyCode',
    start: 21,
    end: 36
  }])
})

test('Find a hyperlink in the middle of the text.', () => {
  const text = 'this text contains a https://hyperlink.com to a website.'

  expect(findSpecialSubstrings(text)).toEqual([{
    type: 'externalLink',
    content: 'https://hyperlink.com',
    start: 21,
    end: 41
  }])
})

test('Find a hyperlink at the end of some text with a trailing period.', () => {
  const text = 'this text contains a https://hyperlink.com.'

  expect(findSpecialSubstrings(text)).toEqual([{
    type: 'externalLink',
    content: 'https://hyperlink.com',
    start: 21,
    end: 41
  }])
})
