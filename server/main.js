import serialport, { SerialPort } from 'serialport'
import { Meteor } from 'meteor/meteor'

import { Tasks } from '../imports/api/tasks.js'

const sp = new SerialPort('/dev/ttyACM0', {
  baudrate: 9600,
  parser: serialport.parsers.readline('\n'),
})

Meteor.startup(() => {
  // code to run on server at startup

  const cursor = Tasks.find({ active: true })
  cursor.observeChanges({
    added(id, task) {
      console.log('task added', id, task)
      // sp.write('ok', () => {
      // })
    },
  })
})

sp.on('open', () => {
  console.log('port is open')
})
sp.on('data', (data) => {
  console.log('new data', data)
})
sp.on('close', () => {

})
sp.on('error', () => {

})
