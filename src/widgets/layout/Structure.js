import React from 'react'

export function Structure ({ children }) {
  return <div className='layout-structure-wrapper'>{children}</div>
}

Structure.Header = function ({ children }) {
  return <header className='layout-structure-header'>{children}</header>
}

Structure.Main = function ({ children }) {
  return <main className='layout-structure-main'>{children}</main>
}
