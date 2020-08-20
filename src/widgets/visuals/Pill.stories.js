import React from 'react'
import { Pill } from './Pill'

export default {
  title: 'Visuals/Pill'
}

export const asDefault = () => <div><Pill /></div>
export const withContent = () => (
  <div>
    <Pill active value='first' group='example' onSelect={() => {}}>FIRST</Pill>
    <Pill value='second' group='example' onSelect={() => {}}>SECOND</Pill>
  </div>
)
