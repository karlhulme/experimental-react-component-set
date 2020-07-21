import React from 'react'
import styled from 'styled-components'
import { tablet, desktop, widescreen } from './formFactorSizes'

export const Container = styled.h2`
  font-size: 1.2rem;

  @media (min-width: ${tablet}px) {
    font-size: 1.4rem;
  }

  @media (min-width: ${desktop}px) {
    font-size: 1.8rem;
  }

  @media (min-width: ${widescreen}px) {
    font-size: 2rem;
  }
`

export function Heading ({ text }) {
  return (
    <Container>{text}</Container>
  )
}
