import React from 'react'
import styled from 'styled-components'

export const Container = styled.h3`
  font-size: 1.1rem;

@media (min-width: 768px) {
  font-size: 1.15rem;
}

/* desktop */
@media (min-width: 992px) {
  font-size: 1.25rem;
}
`

export function SubHeading ({ text }) {
  return (
    <Container>{text}</Container>
  )
}
