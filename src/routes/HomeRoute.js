import React from 'react'
import { useParams } from 'react-router-dom'
import { GroupedLinksView, Heading, PageHeading, PageOverview, Para, SubHeading, LinkCollection } from '../widgets'

function CategorySection ({ resources, categoryName, lang }) {
  const fieldTypesInCategory = resources.fieldTypes.filter(f => f.category === categoryName)

  const links = fieldTypesInCategory.map(f =>
    ({ title: f.title, url: `/${lang}/field-types/${f.name}` }))

  return (
    <>
      <SubHeading text={resources.categories.find(c => c.name === categoryName).title} />
      <LinkCollection links={links} />
    </>
  )
}

export function HomeRoute ({ resources }) {
  const { lang } = useParams()

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
      <Heading text='Field Types' />
      <Para>
        Each document is made up of fields.  Each field is given a type that governs which values are valid for that field.
      </Para>
      {resources.categories.sort((a, b) => a.order - b.order).map(c =>
        <CategorySection key={c.name} resources={resources} categoryName={c.name} lang={lang} />)}
    </>
  )
}
