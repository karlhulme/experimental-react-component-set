import React from 'react'
import styled from 'styled-components'
import { JsonViewStyled } from './JsonViewStyled'

const Container = styled.div`
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`

const TextContainer = styled.div`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
`

const CodeContainer = styled.div`
  padding-right: 1rem;
`

const CodeShell = styled.div`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
`

export function RegularFieldTypePanel ({ name, title, category, description, docExamples, jsonSchema }) {
  return (
    <Container>
      <TextContainer>
        <h2>{title} ({category})</h2>
        <p>{description}</p>
        <br />
        <h3>Usage</h3>
        <br />
        <div>
          <code>
            {'{'}<br />
            {docExamples.map((example, index) => (
              <div key={index}>&nbsp;&nbsp;{`"example${index + 1}": `}{JSON.stringify(example, null, 2)}</div>
            ))}
            {'}'}
          </code>
        </div>
        <br />
        <h3>Underlying JSON Schema</h3>
        <br />
      </TextContainer>
      <CodeContainer>
        <CodeShell>
          <JsonViewStyled obj={typeof jsonSchema === 'function' ? jsonSchema('#/defs/') : jsonSchema} showLineNumbers />
        </CodeShell>
      </CodeContainer>
    </Container>
  )
}
