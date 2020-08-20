import React from 'react'

export function Panel ({ children }) {
  return <div className='surfaces-panel-wrapper'>{children}</div>
}

Panel.Header = function ({ children }) {
  return <div className='surfaces-panel-header'>{children}</div>
}

Panel.Section = function ({ children }) {
  return <div className='surfaces-panel-section'>{children}</div>
}
