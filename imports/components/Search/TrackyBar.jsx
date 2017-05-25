import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import ReactDOM from 'react-dom'

import { Tasks } from '../../api/tasks.js'
//
// import Task from './Task'
// // import Editor from './Editor'

// App component - represents the whole app
class TrackyBar extends Component {

  constructor() {
    super()
    this.state = {
      readyToStart: false,
    }
  }

  checkReadyToStart() {
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    if (text) {
      this.setState({
        readyToStart: true,
      })
    } else {
      this.setState({
        readyToStart: false,
      })
    }
  }

  activateTask(event) {
    event.preventDefault()

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()

    Tasks.insert({
      text,
      active: true,
      createdAt: new Date(), // current time
    })

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = ''
  }

  render() {
    return (
      <div className="container">
        <div className="tracky-bar">
          <form className="tracky-bar-content" onSubmit={this.activateTask.bind(this)}>
            {/* <span className="icon-compass tracky-icon" /> */}
            <input
              className="tracky-bar-input"
              type="text"
              ref="textInput"
              placeholder="What is your next task?"
              onKeyUp={this.checkReadyToStart.bind(this)}
            />
            {this.state.readyToStart ?
              <span className="icon-arrow-right tracky-bar-icon tracky-bar-button" onClick={this.activateTask.bind(this)} /> : null}
          </form>
        </div>
      </div>
    )
  }
}

TrackyBar.propTypes = {
}

export default createContainer(() => {
  return {
  }
}, TrackyBar)
