import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

// import styles from './task.style'

import { Tasks } from '../../api/tasks.js'

// Task component - represents a single todo item
export default class Task extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false,
      transitionStep: 0
    }
  }

  toggleActivate() {


    console.log('activate')
    this.setState({
      active: !this.state.active,
    })
  }

  isActive() {
    return this.state.active
  }

  transitionStep() {
    return this.state.transitionStep;
  }

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }

  updateThisTaskText() {
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    console.log('updateThisTaskText', `#${text}#`)
    Tasks.update(this.props.task._id, {
      $set: { text }
    })
  }

  render() {
    return (
      <div className={`task-container ${this.isActive() ? 'active' : ''}`}>
        <div className="task">
          <div className="task-content">
            <form className="task-form">
              <input
                className="task-content-input"
                type="text"
                ref="textInput"
                placeholder="Type to add new task"
                defaultValue={this.props.task.text}
                onKeyUp={this.updateThisTaskText.bind(this)}
              />
            </form>

          </div>
        </div>
        <div className="task-more-container">
          <div className={`task-more ${this.isActive() ? 'active' : ''}`}>


            <button className={`task-more-button task-more-button-1 ${this.isActive() ? 'active' : ''}`} title="start task" data-uk-tooltip>
              {/*<span data-uk-icon="icon: sign-in; ratio: 1"></span>*/}
              <i className="icon-control-play"></i>
            </button>
            <button className={`task-more-button task-more-button-2 ${this.isActive() ? 'active' : ''}`} title="delete task" data-uk-tooltip onClick={this.deleteThisTask.bind(this)}>
              {/*<span data-uk-icon="icon: trash; ratio: 0.9"></span>*/}
              <i className="icon-trash"></i>
            </button>

          </div>
        </div>
      </div>
    )
  }
}

// <button className={`task-content-button ${this.isActive() ? 'active' : ''}`} onClick={this.toggleActivate.bind(this)}>
//   {this.isActive() ?
//     <i className="icon-arrow-left"></i> :
//     <i className="icon-arrow-right"></i>}
// </button>

//           <button className="task-content-button" onClick={this.deleteThisTask.bind(this)}>


// <div className="task-content-text">
//   {this.props.task.text}
// </div>

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
  select: PropTypes.func.isRequired,
}
