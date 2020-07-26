import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { InlineLink } from './InlineLink'

export default {
  title: 'InlineLink',
  component: InlineLink
}

export const withTextAndUrl = () => <BrowserRouter><InlineLink text='Example' url='https://example.org' /></BrowserRouter>
export const withUndefineds = () => <BrowserRouter><InlineLink /></BrowserRouter>
