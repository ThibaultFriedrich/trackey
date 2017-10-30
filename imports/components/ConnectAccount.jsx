import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class ConnectAccount extends Component {

  constructor(props) {
    super(props)

    this.connectService = this.connectService.bind(this)

    this.state = {
      services: [
        {
          name: 'Asana',
          id: 'asana',
        },
        {
          name: 'Trello',
          id: 'trello',
        },
      ],
    }
  }

  renderService(service) {
    return (
      <div className="connect-account-service" onClick={this.connectService(service)}>
        <img
          alt="{service.name}"
          src={`/img/services/${service.id}.png`}
          className="connect-account-service-icon"
        />
        <div className="connect-account-service-name">
          {service.name}
        </div>
      </div>
    )
  }

  connectService(service) {
    return () => {
      browserHistory.push('/')
    }
  }


  render() {
    return (
      <div className="connect-account">
        <div className="connect-account-inner">
          <h1 className="connect-account-title">
            Connect a Project Management Service
          </h1>
          <div className="connect-account-description">
            By connecting one of these tools, you will be able to track the time spent on all
             tasks of the selected tool.
          </div>
          <div className="connect-account-list">
            {this.state.services.map(service => (
                  this.renderService(service)
                ))}
          </div>
          {/* <button className="button outline uk-button uk-button-default">Next</button> */}
        </div>
      </div>
    )
  }
}

export default ConnectAccount
