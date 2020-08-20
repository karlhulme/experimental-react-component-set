import React from 'react'
import { JsonView } from './JsonView'

export default {
  title: 'Visuals/JsonView'
}

export const asDefault = () => <JsonView />
export const withExampleObject = () => <JsonView obj={{ hello: 'world', foo: { bar: true } }} />
export const withLineNumbers = () => <JsonView obj={{ hello: 'world', foo: { bar: true } }} showLineNumbers />
