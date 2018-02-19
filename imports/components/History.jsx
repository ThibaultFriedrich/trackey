import React, { Component } from 'react'

import Nav from './Nav'

class History extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
          service: 'trello',
          title: 'Update the new interface',
          timeline: [{ startAt: new Date(), endAt: new Date() }],
        },
        {
          service: 'asana',
          title: 'Development the artifial intelligence',
          timeline: [{ startAt: new Date(), endAt: new Date() }],

        },
        {
          service: 'trello',
          title: 'todo',
          timeline: [{ startAt: new Date(), endAt: new Date() }],
        },
      ],
    }
  }

  renderTask(task) {
    const startAt = task.timeline[0].startAt
    const endAt = task.timeline[task.timeline.length - 1].endAt
    return (
      <div className="history-task">
        <img
          alt="{task.service}"
          src={`/img/services/${task.service}.png`}
          className="history-task-service"
        />
        <div className="history-task-content">
          {task.title}
          <div className="history-task-content-indicator">
            <i className="ti-shift-right-alt" /> {startAt}
            <i className="ti-check-box" /> {endAt}
            <i className="ti-timer" /> 10s
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="history">
        <Nav />
        <div className="history-inner">
          <div className="history-list">
            {this.state.tasks.map(task => (
                  this.renderTask(task)
                ))}
          </div>
        </div>
      </div>
    )
  }
}

export default History
