import React from 'react'
import { FormRoot } from './FormRoot'
import { VisualRoot } from './VisualRoot'

export function RootLayout ({ children }) {
  return (
    <VisualRoot>
      <FormRoot>
        {children}
      </FormRoot>
    </VisualRoot>
  )
}
