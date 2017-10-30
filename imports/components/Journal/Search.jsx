import React, { Component, PropTypes } from 'react'

class Search extends Component {

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.clearSearchInput = this.clearSearchInput.bind(this)

    this.state = {
      query: '',
      firstTime: true,
      tasks: [],
      hiding: false,
      top: 0,
    }
  }

  onChange(event) {
    this.setState({
      query: event.target.value,
    })

    if (event.target.value && event.target.value.length > 3) {
      this.setState({
        firstTime: false,
        tasks: [
          {
            service: 'trello',
            title: 'Update the new interface',
          },
          {
            service: 'asana',
            title: 'Development the artifial intelligence',
          },
          {
            service: 'trello',
            title: 'todo',
          },
        ],
      })
    } else {
      this.setState({
        tasks: [],
      })
    }
  }

  clearSearchInput() {
    const totalLength = this.searchInput.value.length
    let pitch = 20
    if (totalLength > 0) {
      pitch = 400 / totalLength
    }

    const interval = setInterval(() => {
      const length = this.searchInput.value.length
      if (length <= 1) {
        this.searchInput.value = ''
        this.setState({
          query: '',
        })
        clearInterval(interval)
        this.searchInput.focus()
        return
      }
      const newValue = this.searchInput.value.substring(0, length - 2)
      this.searchInput.value = newValue
      this.setState({
        query: newValue,
      })
    }, pitch)

    this.setState({
      tasks: [],
    })
  }

  selectTask(task) {
    return () => {
      // this.searchInput.value = ''
      const height = this.searchContainer.clientHeight + 200
      this.setState({
        // query: '',
        // tasks: [],
        top: -height,
        hiding: true,
      })
      setTimeout(() => {
        this.props.onSelectionChanged(task)
      }, 500)
    }
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
        <div className="journal-search-task-play" onClick={this.selectTask(task)}>
          <i className="journal-search-task-play-icon ti-control-play" />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={`journal-inner ${this.state.firstTime ? 'journal-inner-center' : ''}`}>
        <div
          className="journal-search-container"
          style={{ top: this.state.top }}
          ref={el => { this.searchContainer = el }}
        >
          <div className="journal-search">
            <i className="journal-search-icon ti-search" />
            <input
              ref={el => { this.searchInput = el }}
              className="journal-search-input"
              type="text"
              placeholder="What is your next task?"
              onChange={this.onChange}
            />
            {
              this.state.query ?
                <i
                  className="journal-search-icon journal-search-button ti-close"
                  onClick={this.clearSearchInput}
                /> : null
            }
          </div>

          <div className="journal-search-list">
            {this.state.tasks.map(task => (
                  this.renderTask(task)
                ))}
          </div>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  onSelectionChanged: PropTypes.func,
}

export default Search
