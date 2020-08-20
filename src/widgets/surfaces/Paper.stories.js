import React from 'react'
import { Paper } from './Paper'

export default {
  title: 'Surfaces/Paper',
  component: Paper
}

export const withText = () => <Paper>This is some content</Paper>
export const withTextAndDarkMode = () => <Paper darkMode>This is some content in dark mode.</Paper>
