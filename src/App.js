import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { builtinFieldTypes } from 'jsonotron-builtin-field-types'
import { FieldTypeRoute, HomeRoute } from './routes'
import { Header, PrimaryReadingView, RootLayout, VSpacer } from './widgets'

export default function App () {
  return (
    <BrowserRouter>
      <RootLayout>
        <Header homeUrl='/' serviceName='Example Data Service' serviceVersion='1.2.3' />
        <PrimaryReadingView>
          <VSpacer size={1} />
          <Switch>
            <Route path='/' exact>
              <HomeRoute fieldTypes={builtinFieldTypes} />
            </Route>
            <Route path='/doc-types/:docType'>
              <div>Here is a document type</div>
            </Route>
            <Route path='/field-types/:fieldTypeName'>
              <FieldTypeRoute fieldTypes={builtinFieldTypes} />
            </Route>
          </Switch>
          <VSpacer size={3} />
        </PrimaryReadingView>
      </RootLayout>
    </BrowserRouter>
  )
}
