import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import ReactDOM from 'react-dom'

import { Tasks } from '../../api/tasks.js'

import Task from './Task'
// import Editor from './Editor'

// App component - represents the whole app
class TaskList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activeTask: null,
    }
  }

  selectTask(task) {
    return () => {
      console.log('selectTask', task.text)
      this.setState({
        activeTask: task,
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()

    Tasks.insert({
      text,
      index: 10000,
      createdAt: new Date(), // current time
    })

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = ''
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} select={this.selectTask(task)}/>
    ))
  }


  render() {
    return (
      <div className="container">
        <div className="task-list">
          <div className="task-container">
            <div className="task">
              <div className="task-content">
                <form className="task-form" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    className="task-content-input"
                    type="text"
                    ref="textInput"
                    placeholder="Type to add new task"
                  />
                </form>
              </div>
            </div>
          </div>
          {this.renderTasks()}
        </div>
        <div className="task-current">
          <header>
            <h1>Tracky</h1>
          </header>
        </div>

        <div className="menu">
          <button className="menu-button">
            <span data-uk-icon="icon: grid; ratio: 1.2"></span>
          </button>
          <button className="menu-button menu-button-hidden menu-button-1">
            <span data-uk-icon="icon: list; ratio: 1.2"></span>
          </button>
          <button className="menu-button menu-button-hidden menu-button-2">
            <span data-uk-icon="icon: search; ratio: 1.2"></span>
          </button>
        </div>
      </div>
    )
  }
}

  // <div className="tracky">
  //   <div className="tracky-search">
  //     <span className="tracky-search-icon icon-arrow-right"></span>
  //     <input className="tracky-search-input" type="text" placeholder="What is your next task?" />
  //   </div>
  // </div>

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    tasks: Tasks.find({}, { sort: { order: 1, createdAt: -1 } }).fetch(),
  }
}, TaskList)
