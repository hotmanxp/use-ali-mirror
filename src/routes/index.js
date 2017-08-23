import React from 'react'
import { Route } from 'mirrorx'
import routes from './routes'

const Routes = () => {
  return <div>
    {routes.map((route => <Route
      key={route.path}
      path={route.path}
      exact
      component={route.Cmp}
      />))}
  </div>
}

export default Routes
export { routes }

