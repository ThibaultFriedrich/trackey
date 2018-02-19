import React, { Component } from 'react'

import { Link } from 'react-router'
import Avatar from './Avatar'

class Nav extends Component {

  render() {
    return (
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <h1 className="nav-title">
              <Link to="/">Tracky</Link>
            </h1>
          </div>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-menu-item-link">Chrono
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/" className="nav-menu-item-link">Stats
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/history" className="nav-menu-item-link">History
              </Link>
            </li>
          </ul>
          <Avatar />
        </div>
      </nav>
    )
  }
}

export default Nav
