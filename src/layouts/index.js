import React from 'react'
import Link from 'gatsby-link'

import "../styles/main.scss"

import profilePic from './profile-pic.jpg'
import logo from './logo.svg'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const header = (
      <header>
        <nav className="nav">
          <Link to={'/'} >
            <h1>Kevin Adu</h1>
          </Link>
        </nav>
      </header>
    )
    return (
      <div>
        {header}
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
