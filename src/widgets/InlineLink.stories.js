import React from 'react'
import { Router } from 'react-router-dom'
import { InlineLink } from './InlineLink'

export default {
  title: 'InlineLink',
  component: InlineLink
}

export const withTextAndUrl = () => <Router><InlineLink text='Example' url='https://example.org' /></Router>
export const withUndefineds = () => <Router><InlineLink /></Router>
