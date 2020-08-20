import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Abstract, Box, Heading, JsonView, Markdown, Panel, Para, PrimaryScaffold, Table, Tag, Title
} from '../widgets'

export function EnumTypeRoute ({ enumTypes, darkMode, setDarkMode }) {
  const { enumTypeName } = useParams()
  const enumType = enumTypes.find(f => f.name === enumTypeName)

  const showSystemSection = enumType.category === 'system'
  const showSymbols = Boolean(enumType.items.find(v => v.symbol))
  const showDeprecationSection = Boolean(enumType.items.find(v => v.deprecated))

  return (
    <PrimaryScaffold darkMode={darkMode} setDarkMode={setDarkMode}>
      <Title>{enumType.title}</Title>

      <Abstract>This page describes the <strong>{enumType.name}</strong> enum type.</Abstract>

      {enumType.paragraphs.map((p, index) => <Markdown key={index} source={p} />)}

      {showSystemSection &&
        <Box system>
          <Para>This enum type is used by the system for one or more of the standard fields that appear on all documents.</Para>
        </Box>}

      {enumType.examples.length > 0 &&
        <>
          <Heading>{enumType.examples.length > 1 ? 'Examples' : 'Example'}</Heading>
          {enumType.examples.map((e, index) => (
            <>
              {Array.isArray(e.paragraphs) && e.paragraphs.length > 0 && e.paragraphs.map((p, pIndex) => <Markdown key={pIndex} source={p} />)}
              <Panel>
                <Panel.Section>
                  <JsonView
                    key={index}
                    obj={{
                      [enumType.name + 'Field']: e.value
                    }}
                    showLineNumbers
                  />
                </Panel.Section>
              </Panel>
            </>
          ))}
        </>}

      {Array.isArray(enumType.items) && enumType.items.length > 0 &&
        <>
          <Heading>Values</Heading>
          <Table>
            <Table.Head>
              <Table.Row isHeader>
                <Table.Cell isHeader>Value</Table.Cell>
                {showSymbols && <Table.Cell isHeader>Symbol</Table.Cell>}
                <Table.Cell isHeader>Description</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {enumType.items.map(v => (
                <Table.Row key={v.value}>
                  <Table.Cell>
                    {v.value.toString()}
                    {v.isDeprecated && <>&nbsp;<Tag deprecated /></>}
                  </Table.Cell>
                  {showSymbols && <Table.Cell>{v.symbol}</Table.Cell>}
                  <Table.Cell>
                    {Array.isArray(v.paragraphs) && v.paragraphs.length > 0 && v.paragraphs.map((p, pIndex) => <Markdown key={pIndex} source={p} />)}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>}

      {showDeprecationSection &&
        <>
          <Heading>Deprecation</Heading>
          <Para>Some of the values in this enumeration are marked as <Tag deprecated />.</Para>
          <Para>Existing values should be displayed but users should be discouraged from recording deprecated values in new records.</Para>
        </>}
    </PrimaryScaffold>
  )
}
