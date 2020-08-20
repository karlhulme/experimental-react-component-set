import React from 'react'
import { Link } from '../text'
import { Toggle } from '../inputs'

export function MainMenu ({ darkMode, onChangeDarkMode }) {
  return (
    <div className='menus-main-menu'>
      <Link to='/'>Home</Link><br />
      <Toggle id='darkMode' name='darkMode' value='darkMode' checked={darkMode} onChange={onChangeDarkMode}>&nbsp;Dark Mode</Toggle>
    </div>
  )
}
