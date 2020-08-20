import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { builtinCategoryTypes, builtinEnumTypes, builtinFieldTypes } from 'jsonotron-builtin-field-types'
import { exampleDocTypes } from 'jsonotron-example-doc-types'
import { HomeRoute, DocTypeRoute, EnumTypeRoute, FieldTypeRoute } from './routes'

import './styles/normalize.scss'
import './styles/index.scss'

export default function App () {
  const [darkMode, setDarkMode] = useState(false)

  const categoryTypes = builtinCategoryTypes
  const enumTypes = builtinEnumTypes
  const fieldTypes = builtinFieldTypes
  const docTypes = exampleDocTypes

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <HomeRoute
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            categoryTypes={categoryTypes}
            enumTypes={enumTypes}
            fieldTypes={fieldTypes}
            docTypes={docTypes}
          />
        </Route>
        <Route path='/doc-types/:docTypeName'>
          <DocTypeRoute
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            enumTypes={enumTypes}
            fieldTypes={fieldTypes}
            docTypes={docTypes}
          />
        </Route>
        <Route path='/enum-types/:enumTypeName'>
          <EnumTypeRoute
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            enumTypes={enumTypes}
          />
        </Route>
        <Route path='/field-types/:fieldTypeName'>
          <FieldTypeRoute
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            enumTypes={enumTypes}
            fieldTypes={fieldTypes}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
