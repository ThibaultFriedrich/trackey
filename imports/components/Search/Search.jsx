import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Tasks } from '../../api/tasks.js'

import TrackyBar from './TrackyBar'
import TrackyBoard from './TrackyBoard'

class Search extends Component {
  render() {
    return (
      <div className="container">
        {this.props.activeTasks.length === 0 ? <TrackyBar /> : null}
        {this.props.activeTasks.length !== 0 ? <TrackyBoard task={this.props.activeTasks[0]} /> : null}
      </div>
    )
  }
}

Search.propTypes = {
  activeTasks: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    activeTasks: Tasks.find({ active: true }).fetch(),
  }
}, Search)
