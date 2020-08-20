import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  font-size: 0.6rem;
  font-weight: 800;
  padding: 0.2rem 0.3rem;
  border: 1px solid #666;
  border-radius: 5px;
  `

export function FieldTypeBadge ({ text }) {
  return <Container>+ {text}</Container>
}
