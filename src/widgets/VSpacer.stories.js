import React from 'react'
import styled from 'styled-components'
import { VSpacer } from './VSpacer'

export default {
  title: 'VSpacer',
  component: VSpacer
}

const Before = styled.div`
  background-color: blue;
  width: 50px;
  height: 50px;
`

const After = styled.div`
  background-color: red;
  width: 50px;
  height: 50px;
`

export const withNumber = () => <><Before /><VSpacer size={2} /><After /></>
export const withUndefineds = () => <><Before /><VSpacer /><After /></>
