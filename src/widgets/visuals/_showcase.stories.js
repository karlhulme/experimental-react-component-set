import React from 'react'
import { Spacer } from '../layout'
import { Panel } from '../surfaces'
import { JsonView, Tag } from '../visuals'

export default {
  title: 'Visuals/_Showcase'
}

function ShowCaseExample () {
  return (
    <Spacer>
      <Spacer row small>
        <Tag deprecated />
        <Tag patchable />
        <Tag required />
      </Spacer>
      <Panel>
        <Panel.Section>
          <JsonView obj={{ hello: 'world', foo: { bar: true } }} showLineNumbers />
        </Panel.Section>
      </Panel>
    </Spacer>
  )
}

export const allWidgets = () => <ShowCaseExample />
