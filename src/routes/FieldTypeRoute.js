import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {
  DeprecatedBadge, Heading, InlineCode, InlineExternalLink, InlineLink,
  JsonViewStyled, LinkCollection, Note, PageHeading,
  PageOverview, Para
} from '../widgets'
import { convertTextToSpans } from '../paragraphFormatting'

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

export function FieldTypeRoute ({ resources }) {
  const { lang, fieldTypeName } = useParams()
  const fieldType = resources.fieldTypes.find(f => f.name === fieldTypeName)

  const showSystemSection = fieldType.category === 'system'

  const showValues = fieldType.type === 'enum' && Array.isArray(fieldType.values)
  const showSymbols = showValues && Boolean(fieldType.values.find(v => v.symbol))
  const showDeprecationSection = showValues && Boolean(fieldType.values.find(v => v.deprecated))
  const showReferences = fieldType.referencedFieldTypes.length > 0

  return (
    <>
      <PageHeading text={fieldType.title} />
      <PageOverview>This page describes the <strong>{fieldType.name}</strong> field type.</PageOverview>

      {fieldType.paragraphs.map((p, index) =>
        <Para key={index}>{convertTextToSpans(p, resources.fieldTypes, lang, InlineCode, InlineLink, InlineExternalLink)}</Para>)}

      {showSystemSection &&
        <Note>
          <Para>This field type is used by the system for one or more of the standard fields that appear on all documents.</Para>
        </Note>}

      {fieldType.examples.length > 0 &&
        <>
          <Heading text={fieldType.examples.length > 1 ? 'Examples' : 'Example'} />
          {fieldType.examples.map((e, index) => (
            <>
              {Array.isArray(e.paragraphs) && e.paragraphs.length > 0 && e.paragraphs.map(p =>
                <Para key={index}>{convertTextToSpans(p, resources.fieldTypes, lang, InlineCode, InlineLink, InlineExternalLink)}</Para>)}
              <JsonViewStyled
                key={index}
                obj={{
                  id: `00000000-0000-0000-0000-00000000000${index + 1}`,
                  docType: 'example',
                  [fieldType.name + 'Field']: e.value
                }}
              />
            </>
          ))}
        </>}

      {fieldType.jsonSchema &&
        <>
          <Heading text='Field Schema' />
          <JsonViewStyled obj={fieldType.jsonSchema} showLineNumbers />
        </>}

      {fieldType.values && fieldType.values.length > 0 &&
        <>
          <Heading text='Values' />
          <Table>
            <thead>
              <HeaderRow>
                <HeaderCell>Value</HeaderCell>
                {showSymbols && <HeaderCell>Symbol</HeaderCell>}
                <HeaderCell>Description</HeaderCell>
              </HeaderRow>
            </thead>
            <tbody>
              {fieldType.values.map(v => (
                <Row key={v.value}>
                  <Cell>{v.value.toString()}</Cell>
                  {showSymbols && <Cell>{v.symbol}</Cell>}
                  <Cell>
                    {v.text}
                    {v.deprecated && <>&nbsp;<DeprecatedBadge /></>}
                  </Cell>
                </Row>
              ))}
            </tbody>
          </Table>
        </>}

      {showDeprecationSection &&
        <>
          <Heading text='Deprecation' />
          <Para>Some of the values in this enumeration are marked as <DeprecatedBadge />.</Para>
          <Para>Existing values should be displayed but users should be discouraged from recording deprecated values in new records.</Para>
        </>}

      {showReferences &&
        <>
          <Heading text='Referenced Field Types' />
          <LinkCollection links={fieldType.referencedFieldTypes.map(r =>
            ({ title: r.title, url: `/${lang}/field-types/${r.name}` }))}
          />
        </>}
    </>
  )
}
