import React from 'react'
import { Link } from 'react-router-dom'
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
    <Link to={homeUrl}>
      <ServiceNameContainer>{serviceName}</ServiceNameContainer>
      <ServiceVersionContainer>Version: {serviceVersion}</ServiceVersionContainer>
    </Link>
  )
}
