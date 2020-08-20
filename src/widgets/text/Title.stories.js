import React from 'react'
import { Title } from './Title'

export default {
  title: 'Text/Title',
  component: Title
}

export const withText = () => <Title>This is a page title</Title>
