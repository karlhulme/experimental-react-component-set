import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PrimaryScaffold } from './PrimaryScaffold'

export default {
  title: 'Composites/PrimaryScaffold',
  component: PrimaryScaffold
}

export const asDefault = () => <BrowserRouter><PrimaryScaffold /></BrowserRouter>
export const withContent = () => <BrowserRouter><PrimaryScaffold>Here is some content.</PrimaryScaffold></BrowserRouter>
