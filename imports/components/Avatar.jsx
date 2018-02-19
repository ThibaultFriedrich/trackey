import React, { Component } from 'react'

class Avatar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstname: 'Thibault',
      lastname: 'Friedrich',
    }
  }

  render() {
    let initials = ''
    if (this.state.firstname) {
      initials += this.state.firstname[0]
    }

    if (this.state.lastname) {
      initials += this.state.lastname[0]
    }
    return (
      <div className="avatar">
        {initials}
      </div>
    )
  }
}

export default Avatar
