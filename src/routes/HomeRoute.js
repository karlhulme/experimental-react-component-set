import React from 'react'
import { Abstract, Heading, Link, List, Para, PrimaryScaffold, Title } from '../widgets'

export function HomeRoute ({ docTypes, enumTypes, fieldTypes, darkMode, setDarkMode }) {
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
      <List>
        {fieldTypes.sort((a, b) => a.title.localeCompare(b.title)).map(f =>
          <List.Item key={f.name}><Link to={`/field-types/${f.name}`}>{f.title}</Link></List.Item>)}
      </List>
      <Heading>Enum Types</Heading>
      <List>
        {enumTypes.sort((a, b) => a.title.localeCompare(b.title)).map(e =>
          <List.Item key={e.name}><Link to={`/field-types/${e.name}`}>{e.title}</Link></List.Item>)}
      </List>
    </PrimaryScaffold>
  )
}
