import React from 'react'
import { Toggle } from './Toggle'

export default {
  title: 'Inputs/Toggle',
  component: Toggle
}

export const withText = () => <Toggle id='test' name='test' value='test' checked onChange={() => {}}>Test Value</Toggle>
