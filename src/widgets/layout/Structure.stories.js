import React from 'react'
import styled from 'styled-components'
import { Structure } from './Structure'

export default {
  title: 'Layout/Structure'
}

const HeaderFiller = styled.div`
  background-color: blue;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

const MainFiller = styled.div`
  background-color: green;
`

export const asDefault = () => (
  <Structure>
    <Structure.Header>
      <HeaderFiller>Header</HeaderFiller>
    </Structure.Header>
    <Structure.Main>
      <MainFiller>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
        as opposed to using 'Content here, content here', making it look like readable English.
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
        and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </MainFiller>
    </Structure.Main>
  </Structure>
)
