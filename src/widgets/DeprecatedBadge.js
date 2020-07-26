import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  background-color: #666;
  color: #eee;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.1rem 0.2rem;
  border-radius: 5px;
  `

export function DeprecatedBadge () {
  return <Container>DEPRECATED</Container>
}
