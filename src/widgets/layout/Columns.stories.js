import React from 'react'
import styled from 'styled-components'
import { Columns } from './Columns'

export default {
  title: 'Layout/Columns'
}

const BlueBlock = styled.div`
  background-color: blue;
  height: 50px;
`

const GreenBlock = styled.div`
  background-color: green;
  height: 50px;
`

export const asDefault = () => (
  <Columns>
    <Columns.LeftHalf>
      <BlueBlock />
    </Columns.LeftHalf>
    <Columns.RightHalf>
      <GreenBlock />
    </Columns.RightHalf>
  </Columns>
)
