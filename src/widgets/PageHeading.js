import React from 'react'
import styled from 'styled-components'
import { tablet, desktop, widescreen } from './formFactorSizes'

export const Container = styled.h1`
  font-size: 2.5rem;

  @media (min-width: ${tablet}px) {
    font-size: 3rem;
  }

  @media (min-width: ${desktop}px) {
    font-size: 4rem;
  }

  @media (min-width: ${widescreen}px) {
    font-size: 5rem;
  }
`

export function PageHeading ({ text }) {
  return (
    <Container>{text}</Container>
  )
}
