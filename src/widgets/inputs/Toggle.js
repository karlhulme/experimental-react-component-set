import React from 'react'

export function Toggle ({ checked, children, id, name, value, onChange }) {
  return (
    <>
      <input type='checkbox' className='inputs-toggle' id={id} name={name} value={value} checked={checked} onChange={onChange} />
      <label htmlFor={name}>{children}</label>
    </>
  )
}
