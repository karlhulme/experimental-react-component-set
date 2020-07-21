import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: #1a0dab;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

export function InlineLink ({ text, url }) {
  return <StyledLink to={url}>{text}</StyledLink>
}
