import React from 'react'
import { DarkMode } from './DarkMode'
import { Paper } from './Paper'

export default {
  title: 'Surfaces/DarkMode',
  component: DarkMode
}

export const withText = () => <DarkMode><Paper>This is default mode.</Paper></DarkMode>
export const withEnabledAndText = () => <DarkMode enabled><Paper>This is with dark mode enabled.</Paper></DarkMode>
