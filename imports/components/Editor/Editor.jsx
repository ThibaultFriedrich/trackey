import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

// import styles from './task.style'

import { Tasks } from '../../api/tasks.js'

// Task component - represents a single todo item
export default class Editor extends Component {

  deleteThisTask() {
    //Tasks.remove(this.props.task._id);
  }

  updateThisTaskText() {
    // const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    // console.log('updateThisTaskText', `#${text}#`)
    // Tasks.update(this.props.task._id, {
    //   $set: { text },
    // })
  }

  render() {
    return (
      <div className="editor">
        <div className="editor-content">
          fdsfdsfds
        </div>
      </div>
    )
  }
}

Editor.propTypes = {
}
