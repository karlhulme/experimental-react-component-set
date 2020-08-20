import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Panel } from '../surfaces'
import { JsonView, Pill } from '../visuals'
import { Spacer } from '../layout'
import { Markdown } from './Markdown'

export function JsonExamplesPanel ({ docTypeName, examples }) {
  const [selectedPillIndex, setSelectedPillIndex] = useState(0)

  return (
    <Panel>
      <Panel.Header>
        <Spacer>
          {examples.length === 1 &&
            <>
              {Array.isArray(examples[0].paragraphs) && examples[0].paragraphs.length > 0 && examples[0].paragraphs.map((p, index) =>
                <Markdown key={index} source={p} />)}
            </>}
          {examples.length > 1 &&
            <>
              <Spacer row small>
                {examples.map((e, index) => <Pill key={index} value={index} active={selectedPillIndex === index} onSelect={e => setSelectedPillIndex(index)}>EXAMPLE {index + 1}</Pill>)}
              </Spacer>
              {Array.isArray(examples[selectedPillIndex].paragraphs) && examples[selectedPillIndex].paragraphs.length > 0 && examples[selectedPillIndex].paragraphs.map((p, index) =>
                <Markdown key={index} source={p} />)}
            </>}
        </Spacer>
      </Panel.Header>
      <Panel.Section>
        {docTypeName &&
          <JsonView
            showLineNumbers
            obj={{
              id: `00000000-0000-0000-0000-00000000000${selectedPillIndex + 1}`,
              docType: docTypeName || 'example',
              docVersion: `00000000-0000-0000-0000-00000000000${selectedPillIndex + 1}`,
              docHeader: 'removed-for-brevity',
              ...examples[selectedPillIndex].value
            }}
          />}
      </Panel.Section>
    </Panel>
  )
}

JsonExamplesPanel.examples = PropTypes.array
