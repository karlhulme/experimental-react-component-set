import React from 'react'
import { GroupedLinksView, Heading, PageHeading, PageOverview, Para, VSpacer } from '../widgets'

export function HomeRoute ({ docTypes, fieldTypes }) {
  return (
    <>
      <PageHeading text='Welcome' />
      <PageOverview>This page is the starting point for reading and writing data into the system.</PageOverview>
      <Para>
        This service looks after data stored as JSON documents.
        It provides end-points that you can use to create, retrieve, update and delete those documents.
      </Para>
      <Para>
        Choose a document type below to see the schema of the associated documents and guidance on how to interact with them.
      </Para>
      <GroupedLinksView links={[{ category: 'General', title: 'Customer', url: 'doc-types/customer' }]} />
      <VSpacer size={1} />
      <Heading text='Field Types' />
      <Para>
        Each document is made up of fields.  Each field is given a type that governs which values are valid for that field.
      </Para>
      <GroupedLinksView links={fieldTypes.map(ft => ({ category: ft.category, title: ft.title, url: `/field-types/${ft.name}` }))} />
    </>
  )
}
