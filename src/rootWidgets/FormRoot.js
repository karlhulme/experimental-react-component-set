import React from 'react'

export function FormRoot ({ children }) {
  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
