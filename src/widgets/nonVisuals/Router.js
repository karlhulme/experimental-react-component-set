import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DocTypeRoute, EnumTypeRoute, FieldTypeRoute, HomeRoute } from './routes'

export function Router ({ categoryTypes, darkMode, setDarkMode, enumTypes, fieldTypes, docTypes }) {
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
