import React from 'react'
import { JsonViewStyled } from './JsonViewStyled'

export default {
  title: 'JsonViewStyled',
  component: JsonViewStyled
}

export const withObject = () => <JsonViewStyled obj={{ hello: 'world' }} />
export const withObjectAndHighlightedLine = () => <JsonViewStyled obj={{ foo: 'bar', hello: 'world' }} highlightedLineNumbers={[2]} />
export const withString = () => <JsonViewStyled obj='plain string' />
export const withUndefineds = () => <JsonViewStyled />
