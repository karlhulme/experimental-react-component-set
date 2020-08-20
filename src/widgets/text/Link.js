import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

export function Link ({ children, to = '' }) {
  return to.startsWith('/')
    ? <ReactRouterLink className='text-link' to={to}>{children}</ReactRouterLink>
    : <a className='text-link text-link-external' href={to}>{children}</a>
}
