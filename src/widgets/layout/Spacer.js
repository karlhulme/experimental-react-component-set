import React from 'react'

export function Spacer ({ children, row, small, large }) {
  const spacerClass = row ? 'layout-spacer-row' : 'layout-spacer-col'
  const sizeClass = large ? 'layout-spacer-large' : small ? 'layout-spacer-small' : ''

  return <div className={`${spacerClass} ${sizeClass}`}>{children}</div>
}
