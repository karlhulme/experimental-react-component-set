import React from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import { FieldTypeRoute, HomeRoute } from './routes'
import { Header, PrimaryReadingView, VSpacer } from './widgets'

export function Page ({ resources }) {
  const { lang } = useParams()

  return (
    <>
      <Header homeUrl={`/${lang}`} serviceName='Example Data Service' serviceVersion='1.2.3' />
      <PrimaryReadingView>
        <VSpacer size={1} />
        <Switch>
          <Route path='/:lang' exact>
            <HomeRoute resources={resources} />
          </Route>
          <Route path='/:lang/doc-types/:docType'>
            <div>Here is a document type</div>
          </Route>
          <Route path='/:lang/field-types/:fieldTypeName'>
            <FieldTypeRoute resources={resources} />
          </Route>
        </Switch>
        <VSpacer size={3} />
      </PrimaryReadingView>
    </>
  )
}
