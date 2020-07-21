import React from 'react'
import styled from 'styled-components'
import { HSpacer } from './HSpacer'

export default {
  title: 'HSpacer',
  component: HSpacer
}

const Before = styled.div`
  display: inline-block;
  background-color: blue;
  width: 50px;
  height: 50px;
`

const After = styled.div`
  display: inline-block;
  background-color: red;
  width: 50px;
  height: 50px;
`

export const withNumber = () => <><Before /><HSpacer size={2} /><After /></>
export const withUndefineds = () => <><Before /><HSpacer /><After /></>
