import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HomeLink } from './HomeLink'

export default {
  title: 'HomeLink',
  component: HomeLink
}

export const withText = () => <BrowserRouter><HomeLink homeUrl='/' serviceName='Example Data Service' serviceVersion='1.2.3' /></BrowserRouter>
export const withUndefined = () => <BrowserRouter><HomeLink /></BrowserRouter>
