import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Journal from './Journal'
import ConnectAccount from './ConnectAccount'
import History from './History'

export const app = () => {
  return (
    <div className="container">
      {/* <Nav /> */}
      <Router history={browserHistory}>
        <Route path="/" component={Journal} />
        <Route path="/history" component={History} />
        <Route path="/account/connect" component={ConnectAccount} />
      </Router>
    </div>
  )
}
