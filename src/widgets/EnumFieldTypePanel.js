import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid #333333;
  border-radius: 5px;
  padding : 0.8rem;
`

export function EnumFieldTypePanel ({ name, title, category, description, values }) {
  return (
    <Container>
      <h2>{title} ({category})</h2>
      <p>{description}</p>
    </Container>
  )
}
