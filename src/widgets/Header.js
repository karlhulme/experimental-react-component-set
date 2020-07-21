import React from 'react'
import styled from 'styled-components'
import { HomeLink } from './HomeLink'

const Container = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1rem;
`

export function Header ({ homeUrl, serviceName, serviceVersion }) {
  return (
    <Container>
      <HomeLink homeUrl={homeUrl} serviceName={serviceName} serviceVersion={serviceVersion} />
    </Container>
  )
}
