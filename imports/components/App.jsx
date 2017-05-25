import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import TaskList from './TaskList'
import Search from './Search'

export const app = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Search} />
      <Route path="/list" component={TaskList} />
    </Router>
  )
}
