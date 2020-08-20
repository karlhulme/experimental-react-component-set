import React from 'react'
import styled from 'styled-components'
import { Spacer } from './Spacer'

export default {
  title: 'Layout/Spacer'
}

const BlueBlock = styled.div`
  background-color: blue;
  height: 50px;
`

const BlueInlineBlock = styled.div`
  display: inline-block;
  vertical-align: top;
  background-color: blue;
  height: 50px;
  width: 50px;
`

export const inRowWithSmallGap = () => <Spacer row small><BlueInlineBlock /><BlueInlineBlock /><BlueInlineBlock /></Spacer>
export const inRowWithMediumGap = () => <Spacer row><BlueInlineBlock /><BlueInlineBlock /><BlueInlineBlock /></Spacer>
export const inRowWithLargeGap = () => <Spacer row large><BlueInlineBlock /><BlueInlineBlock /><BlueInlineBlock /></Spacer>

export const inColWithSmallGap = () => <Spacer small><BlueBlock /><BlueBlock /><BlueBlock /></Spacer>
export const inColWithMediumGap = () => <Spacer><BlueBlock /><BlueBlock /><BlueBlock /></Spacer>
export const inColWithLargeGap = () => <Spacer large><BlueBlock /><BlueBlock /><BlueBlock /></Spacer>
