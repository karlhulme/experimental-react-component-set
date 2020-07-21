import React from 'react'
import styled from 'styled-components'

const ServiceNameContainer = styled.div`
  font-size: 1rem;
`

const ServiceVersionContainer = styled.div`
  font-size: 0.8rem;
  color: grey;
`

export function HomeLink ({ homeUrl, serviceName, serviceVersion }) {
  return (
    <a href={homeUrl}>
      <ServiceNameContainer>{serviceName}</ServiceNameContainer>
      <ServiceVersionContainer>Version: {serviceVersion}</ServiceVersionContainer>
    </a>
  )
}
