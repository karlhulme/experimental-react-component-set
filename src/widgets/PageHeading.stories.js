import React from 'react'
import { PageHeading } from './PageHeading'

export default {
  title: 'PageHeading',
  component: PageHeading
}

export const withText = () => <PageHeading text='Positive Integer Or Zero' />
export const withUndefineds = () => <PageHeading />
