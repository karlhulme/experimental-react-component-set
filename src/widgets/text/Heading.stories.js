import React from 'react'
import { Heading } from './Heading'

export default {
  title: 'Text/Heading',
  component: Heading
}

export const withText = () => <Heading>This is a heading</Heading>
