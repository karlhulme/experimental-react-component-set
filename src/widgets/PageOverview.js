import styled from 'styled-components'
import { tablet, desktop, widescreen } from './formFactorSizes'

export const PageOverview = styled.p`
  font-weight: 200;
  line-height: 1.2em;

  font-size: 1.3rem;

  @media (min-width: ${tablet}px) {
    font-size: 1.4rem;
  }

  @media (min-width: ${desktop}px) {
    font-size: 1.5rem;
  }

  @media (min-width: ${widescreen}px) {
    font-size: 1.8rem;
  }
`
