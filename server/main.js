import { Meteor } from 'meteor/meteor'

import { Tasks } from '../imports/api/tasks.js'

Meteor.startup(() => {
  // code to run on server at startup

  const cursor = Tasks.find({ active: true })
  cursor.observeChanges({
    added(id, task) {
      console.log('task added', id, task)
    },
  })
})
