import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import ReactDOM from 'react-dom'

import { Tasks } from '../../api/tasks.js'
//
// import Task from './Task'
// // import Editor from './Editor'

// App component - represents the whole app
class TrackyBoard extends Component {

  stopTask() {
    Tasks.update(this.props.task._id, {
      $set: { active: false }
    })
  }

  updateText() {
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    Tasks.update(this.props.task._id, {
      $set: { text }
    })
  }

  render() {
    return (
      <div className="tracky-board">
        <div className="tracky-board-content">
          <div className="tracky-board-title">
            {this.props.task.text}
            {/* <input
              className="tracky-board-title-input"
              type="text"
              ref="textInput"
              placeholder="Describe your current task"
              defaultValue={this.props.task.text}
              onKeyUp={this.updateText.bind(this)}
            />*/}
          </div>
          <div className="tracky-board-duration">
            00:12
          </div>
          <div className="tracky-board-button-container">
            <button className="button" onClick={this.stopTask.bind(this)}>Stop</button>
          </div>
        </div>
      </div>
    )
  }
}

TrackyBoard.propTypes = {
  task: PropTypes.object.isRequired,
}

export default createContainer(() => {
  return {
  }
}, TrackyBoard)
