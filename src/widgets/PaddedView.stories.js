import React from 'react'
import styled from 'styled-components'
import { PaddedView } from './PaddedView'

export default {
  title: 'PaddedView',
  component: PaddedView
}

const Outer = styled.div`
  border: 10px solid blue;
`

const Inner = styled.div`
  border: 10px solid red;
`

export const withAllBoolean = () => <Outer><PaddedView all><Inner /></PaddedView></Outer>
export const withAllValue = () => <Outer><PaddedView all={2}><Inner /></PaddedView></Outer>
export const withLeftBoolean = () => <Outer><PaddedView left><Inner /></PaddedView></Outer>
export const withLeftValue = () => <Outer><PaddedView left={2}><Inner /></PaddedView></Outer>
export const withTopBoolean = () => <Outer><PaddedView top><Inner /></PaddedView></Outer>
export const withTopValue = () => <Outer><PaddedView top={2}><Inner /></PaddedView></Outer>
export const withRightBoolean = () => <Outer><PaddedView right><Inner /></PaddedView></Outer>
export const withRightValue = () => <Outer><PaddedView right={2}><Inner /></PaddedView></Outer>
export const withBottomBoolean = () => <Outer><PaddedView bottom><Inner /></PaddedView></Outer>
export const withBottomValue = () => <Outer><PaddedView bottom={2}><Inner /></PaddedView></Outer>
export const withUndefineds = () => <PaddedView />
