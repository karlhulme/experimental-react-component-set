import styled from 'styled-components'
import { calculatePadValue } from './whitespace'

export const PaddedView = styled.div`
  /* mobile portrait */
  padding-top: ${props => calculatePadValue(1, props.top, props.all, 1)};
  padding-bottom: ${props => calculatePadValue(1, props.bottom, props.all, 1)};
  padding-left: ${props => calculatePadValue(1, props.left, props.all, 1)};
  padding-right: ${props => calculatePadValue(1, props.right, props.all, 1)};

  /* mobile landscape */
  @media (min-width: 500px) {
    padding-top: ${props => calculatePadValue(1.25, props.top, props.all)};
    padding-bottom: ${props => calculatePadValue(1.25, props.bottom, props.all)};
    padding-left: ${props => calculatePadValue(1.25, props.left, props.all)};
    padding-right: ${props => calculatePadValue(1.25, props.right, props.all)};
  }

  /* tablet */
  @media (min-width: 768px) {
    padding-top: ${props => calculatePadValue(1.5, props.top, props.all)};
    padding-bottom: ${props => calculatePadValue(1.5, props.bottom, props.all)};
    padding-left: ${props => calculatePadValue(1.5, props.left, props.all)};
    padding-right: ${props => calculatePadValue(1.5, props.right, props.all)};
  }

  /* desktop */
  @media (min-width: 992px) {
    padding-top: ${props => calculatePadValue(2, props.top, props.all)};
    padding-bottom: ${props => calculatePadValue(2, props.bottom, props.all)};
    padding-left: ${props => calculatePadValue(2, props.left, props.all)};
    padding-right: ${props => calculatePadValue(2, props.right, props.all)};
  }

  /* widescreen */
  @media (min-width: 1200px) {
    padding-top: ${props => calculatePadValue(2.5, props.top, props.all)};
    padding-bottom: ${props => calculatePadValue(2.5, props.bottom, props.all)};
    padding-left: ${props => calculatePadValue(2.5, props.left, props.all)};
    padding-right: ${props => calculatePadValue(2.5, props.right, props.all)};
  }
`
