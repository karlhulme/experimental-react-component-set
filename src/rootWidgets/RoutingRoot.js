import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

export function RoutingRoot ({ children }) {
  return (
    <BrowserRouter>
      <Route path='/' exact>
        <Redirect path='/' exact to='/en' />
      </Route>

      <Route path='/:lang'>
        {children}
      </Route>
    </BrowserRouter>
  )
}
