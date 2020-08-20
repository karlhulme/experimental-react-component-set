import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainMenu } from './MainMenu'

export default {
  title: 'Menus/MainMenu',
  component: MainMenu
}

export const asDefault = () => <BrowserRouter><MainMenu /></BrowserRouter>
