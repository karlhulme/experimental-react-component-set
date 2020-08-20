import React from 'react'

export function DarkMode ({ children, enabled }) {
  return (
    <div className={enabled ? 'surfaces-dark-mode' : ''}>{children}</div>
  )
}
