import React from 'react'
import { Para } from './Para'

export default {
  title: 'Text/Para',
  component: Para
}

export const withText = () => <Para>This is a paragraph of regular text.  It can be short.  Or it can be very long and include lots of additional text that needs to be read.</Para>
