import React from 'react'
import styled from 'styled-components'

const Container = styled.a`
  color: #1a0dab;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

export function InlineExternalLink ({ text, url }) {
  return <Container href={text}>{text}</Container>
}
