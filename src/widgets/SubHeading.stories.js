import React from 'react'
import { SubHeading } from './SubHeading'

export default {
  title: 'SubHeading',
  component: SubHeading
}

export const withText = () => <SubHeading text='My Sub Heading' />
export const withUndefineds = () => <SubHeading />
