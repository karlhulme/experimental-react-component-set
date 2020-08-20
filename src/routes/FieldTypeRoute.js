import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Abstract, Box, Heading, JsonView, Link, List, Markdown,
  Panel, PrimaryScaffold, Para, Tag, Title
} from '../widgets'

export function FieldTypeRoute ({ enumTypes, fieldTypes, darkMode, setDarkMode }) {
  const { fieldTypeName } = useParams()
  const fieldType = fieldTypes.find(f => f.name === fieldTypeName)

  const showSystemSection = fieldType.category === 'system'

  const showValues = fieldType.type === 'enum' && Array.isArray(fieldType.values)
  const showDeprecationSection = showValues && Boolean(fieldType.values.find(v => v.deprecated))
  const showReferencedFieldTypes = Array.isArray(fieldType.referencedFieldTypes) ? fieldType.referencedFieldTypes.length > 0 : false
  const showReferencedEnumTypes = Array.isArray(fieldType.referencedEnumTypes) ? fieldType.referencedEnumTypes.length > 0 : false

  return (
    <PrimaryScaffold darkMode={darkMode} setDarkMode={setDarkMode}>
      <Title>{fieldType.title}</Title>

      <Abstract>This page describes the <strong>{fieldType.name}</strong> field type.</Abstract>

      {fieldType.paragraphs.map((p, index) => <Markdown key={index} source={p} />)}

      {showSystemSection &&
        <Box system>
          <Para>This field type is used by the system for one or more of the standard fields that appear on all documents.</Para>
        </Box>}

      {fieldType.examples.length > 0 &&
        <>
          <Heading>{fieldType.examples.length > 1 ? 'Examples' : 'Example'}</Heading>
          {fieldType.examples.map((e, index) => (
            <>
              {Array.isArray(e.paragraphs) && e.paragraphs.length > 0 && e.paragraphs.map((p, pIndex) => <Markdown key={pIndex} source={p} />)}
              <Panel>
                <Panel.Section>
                  <JsonView
                    key={index}
                    obj={{
                      [fieldType.name + 'Field']: e.value
                    }}
                    showLineNumbers
                  />
                </Panel.Section>
              </Panel>
            </>
          ))}
        </>}

      {fieldType.jsonSchema &&
        <>
          <Heading>Field Schema</Heading>
          <Panel>
            <Panel.Section>
              <JsonView obj={typeof fieldType.jsonSchema === 'function' ? fieldType.jsonSchema('/#definitions/') : fieldType.jsonSchema} showLineNumbers />
            </Panel.Section>
          </Panel>
        </>}

      {showDeprecationSection &&
        <>
          <Heading>Deprecation</Heading>
          <Para>Some of the values in this enumeration are marked as <Tag deprecated />.</Para>
          <Para>Existing values should be displayed but users should be discouraged from recording deprecated values in new records.</Para>
        </>}

      {showReferencedFieldTypes &&
        <>
          <Heading>Referenced Field Types</Heading>
          <List>
            {fieldType.referencedFieldTypes.map(refFieldTypeName => {
              const refFieldType = fieldTypes.find(f => f.name === refFieldTypeName)
              return <List.Item key={refFieldTypeName}><Link to={`/field-types/${refFieldTypeName}`}>{refFieldType.title}</Link></List.Item>
            })}
          </List>
        </>}

      {showReferencedEnumTypes &&
        <>
          <Heading>Referenced Enum Types</Heading>
          <List>
            {fieldType.referencedEnumTypes.map(refEnumTypeName => {
              const refEnumType = enumTypes.find(e => e.name === refEnumTypeName)
              return <List.Item key={refEnumTypeName}><Link to={`/enum-types/${refEnumTypeName}`}>{refEnumType.title}</Link></List.Item>
            })}
          </List>
        </>}
    </PrimaryScaffold>
  )
}
