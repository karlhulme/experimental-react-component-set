import React from 'react'
import { HomeLink } from './HomeLink'

export default {
  title: 'HomeLink',
  component: HomeLink
}

export const withText = () => <HomeLink homeUrl='/' serviceName='Example Data Service' serviceVersion='1.2.3' />
export const withUndefined = () => <HomeLink />
