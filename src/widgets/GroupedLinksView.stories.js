import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GroupedLinksView } from './GroupedLinksView'

export default {
  title: 'GroupedLinksView',
  component: GroupedLinksView
}

const links = [{
  category: 'Example',
  title: 'MyLink',
  url: '/path/leaf/page1'
}, {
  category: 'Example',
  title: 'OtherLink',
  url: '/path/leaf/page2'
}, {
  category: 'Alternative',
  title: 'ExtraLink',
  url: '/path/leaf/page2'
}]

export const withLinks = () => <BrowserRouter><GroupedLinksView links={links} /></BrowserRouter>
export const withUndefined = () => <BrowserRouter><GroupedLinksView /></BrowserRouter>
