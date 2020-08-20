import React from 'react'

export function Form ({ children }) {
  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
