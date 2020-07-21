import React from 'react'
import { Heading } from './Heading'

export default {
  title: 'Heading',
  component: Heading
}

export const withText = () => <Heading text='My Heading' />
export const withUndefineds = () => <Heading />
