import React from 'react'

export function Figure ({ children }) {
  return (
    <figure className='visuals-figure-wrapper'>{children}</figure>
  )
}

Figure.Divider = function () {
  return <hr className='visuals-figure-divider' />
}

Figure.Caption = function ({ children }) {
  return <figcaption className='visuals-figure-caption'>{children}</figcaption>
}
