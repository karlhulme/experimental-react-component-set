import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #ddd;
  border-left: 10px solid #666;
  padding: 1rem 0 1rem 1rem;
`

export function Note ({ children }) {
  return <Container>{children}</Container>
}
