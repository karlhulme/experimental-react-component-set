import React from 'react'

export function Columns ({ children }) {
  return <div className='layout-columns-wrapper'>{children}</div>
}

Columns.LeftHalf = function ({ children }) {
  return <div className='layout-columns-left'>{children}</div>
}

Columns.RightHalf = function ({ children }) {
  return <div className='layout-columns-right'>{children}</div>
}
