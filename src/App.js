import React from 'react'
import { builtinCategories, builtinFieldTypes } from 'jsonotron-builtin-field-types'
import { DocsLoaderRoot, FormRoot, RoutingRoot, VisualRoot } from './rootWidgets'
import { Page } from './Page'
import { getDocsFromExternalLibrary } from './getDocsFromExternalLibrary'

export default function App () {
  return (
    <RoutingRoot>
      <VisualRoot>
        <FormRoot>
          <DocsLoaderRoot
            categories={builtinCategories}
            docTypes={[]}
            fieldTypes={builtinFieldTypes}
            view={Page}
            getDocsFunc={getDocsFromExternalLibrary}
          />
        </FormRoot>
      </VisualRoot>
    </RoutingRoot>
  )
}
