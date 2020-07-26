import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LinkCollection } from './LinkCollection'

export default {
  title: 'LinkCollection',
  component: LinkCollection
}

const links = [{
  title: 'Link One',
  url: '/path/leaf/page1'
}, {
  title: 'Link Two',
  url: '/path/leaf/page2'
}, {
  title: 'Link Three',
  url: '/path/leaf/page3'
}]

export const withLinks = () => <BrowserRouter><LinkCollection links={links} /></BrowserRouter>
export const withUndefined = () => <BrowserRouter><LinkCollection /></BrowserRouter>
