import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Journal from './Journal'
import ConnectAccount from './ConnectAccount'

export const app = () => {
  return (
    <div className="container">
      {/* <Nav /> */}
      <Router history={browserHistory}>
        <Route path="/" component={Journal} />
        <Route path="/account/connect" component={ConnectAccount} />
      </Router>
    </div>
  )
}
