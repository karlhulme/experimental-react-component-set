import React from 'react'

export function Pill ({ active, group, children, value, onSelect }) {
  return (
    <label className={`visuals-pill ${active ? 'visuals-pill-active' : ''}`} htmlFor={value} selected={active}>
      <input className='visuals-pill-input' type='radio' id={value} name={group} value={value} checked={active} onChange={onSelect} />
      {children}
    </label>
  )
}
