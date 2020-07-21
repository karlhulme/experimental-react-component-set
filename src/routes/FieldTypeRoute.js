import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Heading, JsonViewStyled, PageHeading, PageOverview, Para, SubHeading, VSpacer } from '../widgets'

const Table = styled.table`
  border-bottom: 1px solid grey;
  border-collapse:collapse;
`

const HeaderRow = styled.tr`
  border-bottom: 1px solid grey;
`

const HeaderCell = styled.th`
  text-align: left;
  padding: 0.5rem;
`

const Row = styled.tr`
  border-bottom: 1px solid lightgrey;
`

const Cell = styled.td`
  padding: 0.5rem;
`

// show the below is category=system in a warning box.
// 'This field type is used by the system for one or more of the standard fields that appears on all documents.  It\'s unlikely that you\'ll need to supply values that adhere to this type.'

export function FieldTypeRoute ({ fieldTypes }) {
  const { fieldTypeName } = useParams()
  const fieldType = fieldTypes.find(ft => ft.name === fieldTypeName)

  return (
    <>
      <PageHeading text={fieldType.title} />
      <PageOverview>This page describes the <strong>{fieldType.name}</strong> field type.</PageOverview>
      <Para>{fieldType.description}</Para>

      {fieldType.docExamples && fieldType.docExamples.length > 0 &&
        <>
          <VSpacer size={1} />
          <Heading text='Example Usage' />
          <JsonViewStyled obj={{ [fieldType.name + 'Field']: fieldType.docExamples[0] }} />
        </>}

      {fieldType.values && fieldType.values.length > 0 &&
        <>
          <VSpacer size={1} />
          <Heading text='Example Usage' />
          <SubHeading text='Example 1' />
          <Para>Notice in this example how the result is assigned without quotations.</Para>
          <JsonViewStyled obj={{ id: '00000000-0000-0000-0000-000000000001', docType: 'example', [fieldType.name + 'Field']: fieldType.values[0].value }} />
        </>}

      {fieldType.jsonSchema &&
        <>
          <VSpacer size={1} />
          <Heading text='Field Schema' />
          <JsonViewStyled obj={typeof fieldType.jsonSchema === 'function' ? fieldType.jsonSchema('#/defs/') : fieldType.jsonSchema} showLineNumbers />
        </>}

      {fieldType.values &&
        <>
          <VSpacer size={1} />
          <Heading text='Values' />
          <Table>
            <thead>
              <HeaderRow>
                <HeaderCell>Value</HeaderCell>
                <HeaderCell>Description</HeaderCell>
              </HeaderRow>
            </thead>
            <tbody>
              {fieldType.values.map(v => (
                <Row key={v.value}>
                  <Cell>{v.value.toString()}</Cell>
                  <Cell>{v.description}</Cell>
                </Row>
              ))}
            </tbody>
          </Table>
        </>}
    </>
  )
}
