// import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import { app } from '../imports/components/App.jsx'

Meteor.startup(() => {
  render(app(), document.getElementById('app'))
})
