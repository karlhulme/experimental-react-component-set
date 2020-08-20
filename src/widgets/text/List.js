import React from 'react'

export function List ({ children, ordered }) {
  return ordered
    ? <ol className='text-list text-list-ordered'>{children}</ol>
    : <ul className='text-list'>{children}</ul>
}

List.Item = function ({ children }) {
  return <li className='text-list-item'>{children}</li>
}
