import React, { Component } from 'react'
import { NavLink } from 'mirrorx'
import { routes } from '@/routes'

const tabRoutes = routes.slice(0, 4)

class FootTabs extends Component {
  render() {
    return (
      <div className='footer-container'>
        {tabRoutes.map(route =>
          <NavLink
            key={route.path}
            className='tab'
            to={route.path}
            children={route.text}
          />
        )}
      </div>
    )
  }
}

export default FootTabs

