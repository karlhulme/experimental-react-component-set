import React from 'react'
import { Abstract, Heading, Link, List, Para, PrimaryScaffold, SubHeading, Title } from '../widgets'

function CategorySection ({ categoryType, enumTypes, fieldTypes }) {
  const fieldTypesInCategory = fieldTypes.filter(f => f.category === categoryType.name)
  const enumTypesInCategory = enumTypes.filter(e => e.category === categoryType.name)

  const fieldLinks = fieldTypesInCategory.map(f =>
    ({ title: f.title, url: `/field-types/${f.name}` }))

  const enumLinks = enumTypesInCategory.map(e =>
    ({ title: e.title, url: `/enum-types/${e.name}` }))

  return (
    <>
      <SubHeading>{categoryType.title}</SubHeading>
      <List>
        {fieldLinks.concat(enumLinks).map((link, index) =>
          <List.Item key={index}><Link to={link.url}>{link.title}</Link></List.Item>)}
      </List>
    </>
  )
}

export function HomeRoute ({ categoryTypes, docTypes, enumTypes, fieldTypes, darkMode, setDarkMode }) {
  return (
    <PrimaryScaffold darkMode={darkMode} setDarkMode={setDarkMode}>
      <Title>Welcome</Title>
      <Abstract>This page is the starting point for reading and writing data into the system.</Abstract>
      <Para>
        This service looks after data stored as JSON documents.
        It provides end-points that you can use to create, retrieve, update and delete those documents.
      </Para>
      <Heading>Document Types</Heading>
      <Para>
        Choose a document type below to see the schema of the associated documents and guidance on how to interact with them.
      </Para>
      <List>
        {docTypes.sort((a, b) => a.title.localeCompare(b.title)).map(d =>
          <List.Item key={d.name}><Link to={`/doc-types/${d.name}`}>{d.title}</Link></List.Item>)}
      </List>
      <Heading>Field Types</Heading>
      <Para>
        Each document is made up of fields.  Each field is given a type that governs which values are valid for that field.
      </Para>
      {categoryTypes.sort((a, b) => a.order - b.order).map(c =>
        <CategorySection key={c.name} categoryType={c} enumTypes={enumTypes} fieldTypes={fieldTypes} />)}
    </PrimaryScaffold>
  )
}
