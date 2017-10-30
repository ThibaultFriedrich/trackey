import React, { Component } from 'react'

// import moment from 'moment'

class CurrentTask extends Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)

    this.state = {
      activeTask: null,
      chrono: 0,
      running: false,
      chronoInterval: null,
      currentDate: new Date(),
      tasks: [
        {
          service: 'trello',
          title: 'todo',
        },
        {
          service: 'asana',
          title: 'todo',
        },
        {
          service: 'trello',
          title: 'todo',
        },
      ],
    }

    /* setInterval(() => {
      this.setState({
        currentDate: new Date(),
        activeTask: null,
      })
    }, 1000) */
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

  play() {
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
          description: '',
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

  renderTask(task) {
    return (
      <div className="journal-search-task">
        <img
          alt="{task.service}"
          src={`/img/services/${task.service}.png`}
          className="journal-search-task-service"
        />
        <div className="journal-search-task-title">
          {task.title}
        </div>
        <div className="journal-search-task-play">
          <i className="journal-search-task-play-icon ti-control-play" />
        </div>
      </div>
    )
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
        {/* <Nav /> */}
        <div className="journal-current-task">
          <div className="journal-current-task-inner">
            <div className="journal-current-task-inner-center">
              <div className="journal-current-task-chrono">
                <div className="journal-current-task-chrono-time">
                  {minutes}:{seconds}
                </div>
                <div className="journal-current-task-chrono-description">
                  Finish the design of the new interface
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
                  <div className={`button journal-current-task-remote-button ${this.state.running ? 'journal-current-task-remote-button-right-hide' : ''}`}>
                    New task
                    <i className="button-icon ti-plus" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="journal-inner">
          {/* <div className="journal-search">
            <i className="journal-search-icon ti-search" />
            <input
              className="journal-search-input"
              type="text"
              placeholder="What is your next task?"
            />
            <i className="journal-search-icon journal-search-button ti-close" />
          </div>

          <div className="journal-search-list">
            {this.state.tasks.map(task => (
                  this.renderTask(task)
                ))}
          </div> */}
          {/* <div className="journal-new-task-current-datetime">
            <div className="journal-new-task-current-datetime-date">
              {moment(this.state.currentDate).format('dddd, MMMM Do')}
            </div>
            <div
              className={
                `journal-new-task-current-datetime-time ${this.state.currentDate.getHours() > 9 ?
                'journal-new-task-current-datetime-time-large' : ''}`}>
              {moment(this.state.currentDate).format('H:mm')}
            </div>
          </div>
          <div className="journal-new-task-choose">
            <input
              type="text"
              className="journal-new-task-name"
              placeholder="What is your first task today?"
            />
          </div> */}
        </div>
        {/* <div className="task-list">
          <div className="task">
            <div className="task-play">
              <i className="ti-control-play" />
            </div>
          </div>
        </div>*/}

      </div>
    )
  }
}

export default CurrentTask
