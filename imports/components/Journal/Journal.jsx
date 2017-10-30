import React, { Component } from 'react'

// import moment from 'moment'

import Nav from '../Nav'

import Search from './Search'

// App component - represents the whole app
class Journal extends Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.reinitTask = this.reinitTask.bind(this)

    this.state = {
      firstTime: true,
      activeTask: null,
      chrono: 0,
      running: false,
      chronoInterval: null,
      currentDate: new Date(),
      tasks: [],
    }

    /* setInterval(() => {
      this.setState({
        currentDate: new Date(),
        activeTask: null,
      })
    }, 1000) */
  }

  reinitTask() {
    this.setState({
      activeTask: null,
      firstTime: true,
    })
  }

  toggle() {
    if (this.state.running) {
      this.pause()
    } else {
      this.play()
    }
  }

  pause() {
    const activeTask = this.state.activeTask

    activeTask.timeline.push({
      startAt: activeTask.currentTimeline.startAt,
      endAt: new Date(),
    })

    this.setState({
      activeTask,
      running: false,
    })

    if (this.state.chronoInterval) {
      clearInterval(this.state.chronoInterval)
    }
  }

  play(task = null) {
    if (this.state.activeTask) {
      const newActiveTask = this.state.activeTask
      newActiveTask.currentTimeline = {
        startAt: new Date(),
      }
      this.setState({
        activeTask: newActiveTask,
        running: true,
        chrono: this.state.chrono + 1,
      })
    } else {
      this.setState({
        chrono: 0,
        running: true,
        activeTask: {
          description: task.title,
          timeline: [],
          currentTimeline: {
            startAt: new Date(),
          },
        },
      })
    }

    if (this.state.chronoInterval) {
      clearInterval(this.state.chronoInterval)
    }

    this.setState({
      chronoInterval: setInterval(() => {
        this.setState({
          chrono: this.state.chrono + 1,
        })
      }, 1000),
    })
  }

  render() {
    let seconds = 0
    let minutes = 0
    let hours = 0

    const chrono = this.state.chrono

    if (chrono < 60) {
      minutes = 0
      seconds = Math.trunc(chrono)
    } else {
      minutes = Math.trunc(chrono / 60)
      seconds = Math.trunc(chrono % 60)
    }

    if (seconds < 10) {
      seconds = `0${seconds}`
    }

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    return (
      <div className="journal">
        <Nav />
        {this.state.activeTask ?
          <div className="journal-current-task">
            <div className="journal-current-task-inner">
              <div className="journal-current-task-inner-center">
                <div className="journal-current-task-chrono">
                  <div className="journal-current-task-chrono-time">
                    {minutes}:{seconds}
                  </div>
                  <div className="journal-current-task-chrono-description">
                    {this.state.activeTask.description}
                  </div>
                  {/* <div className="journal-current-task-chrono-play">
                    <i className="ti-control-pause" />
                  </div> */}
                </div>
                <div className="journal-current-task-remote">
                  <div className="journal-current-task-remote-left">
                    <div className={`button journal-current-task-remote-button ${this.state.running ? 'journal-current-task-remote-button-left-hide' : ''}`}>
                      End task
                      <i className="button-icon ti-check" />
                    </div>
                  </div>
                  <div className="journal-current-task-remote-center">
                    <div className="journal-current-task-remote-play" onClick={this.toggle}>
                      <i className={`journal-current-task-remote-play-icon ti-control-${this.state.running ? 'pause' : 'play'}`} />
                    </div>
                  </div>
                  <div className="journal-current-task-remote-right">
                    <div
                      onClick={this.reinitTask}
                      className={`button journal-current-task-remote-button ${this.state.running ?
                         'journal-current-task-remote-button-right-hide' : ''}`}
                    >
                      New task
                      <i className="button-icon ti-plus" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        : null}
        {this.state.activeTask === null ? <Search onSelectionChanged={this.play} /> : null}
      </div>
    )
  }
}

export default Journal
