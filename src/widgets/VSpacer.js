import styled from 'styled-components'
import { calculateSpaceValue } from './whitespace'

export const VSpacer = styled.div`
  /* mobile portrait */
  height: ${props => calculateSpaceValue(1, props.size)};

  /* mobile landscape */
  @media (min-width: 500px) {
    height: ${props => calculateSpaceValue(1.25, props.size)};
  }

  /* tablet */
  @media (min-width: 768px) {
    height: ${props => calculateSpaceValue(1.5, props.size)};
  }

  /* desktop */
  @media (min-width: 992px) {
    height: ${props => calculateSpaceValue(2, props.size)};
  }

  /* widescreen */
  @media (min-width: 1200px) {
    height: ${props => calculateSpaceValue(2.5, props.size)};
  }
`
