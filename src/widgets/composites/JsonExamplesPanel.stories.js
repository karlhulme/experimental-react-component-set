import React from 'react'
import { JsonExamplesPanel } from './JsonExamplesPanel'

export default {
  title: 'Composites/JsonExamplesPanel',
  component: JsonExamplesPanel
}

const examples = [{
  paragraphs: ['One of the most influential thinkers of all time, Albert Einstein.'],
  value: {
    fullName: 'Albert Einstein',
    dateOfBirth: '1879-03-14',
    countryOfBirth: 'de',
    awards: ['Barnard Medal', 'Matteucci Medal', 'Copley Medal'],
    numberOfAwards: 3
  }
}, {
  paragraphs: ['Sir Isaac Newton was an English mathematician, physicist, astronomer, theologian, and author.'],
  value: {
    fullName: 'Isaac Newton',
    dateOfBirth: '1642-12-25',
    countryOfBirth: 'gb',
    awards: ['FRS', 'Knight Bachelor'],
    numberOfAwards: 2
  }
}]

export const withOneExample = () => <JsonExamplesPanel docTypeName='scientist' examples={examples.slice(0, 1)} enumTypes={[]} fieldTypes={[]} />
export const withMultipleExamples = () => <JsonExamplesPanel docTypeName='scientist' examples={examples} enumTypes={[]} fieldTypes={[]} />
