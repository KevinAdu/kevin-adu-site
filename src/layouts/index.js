import React from 'react'
import Link from 'gatsby-link'

import "../styles/main.scss"

import profilePic from './profile-pic.jpg'
import logo from './logo.svg'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <header className="hero">
          <nav className="nav">
            <Link to={'/'} >
              <img className="nav-logo" src={logo}></img>
            </Link>
          </nav>
          <img className="hero-avatar" src={profilePic}></img>
          <h1 className="hero-name">Kevin Adu-Sarkodie</h1>
          <h2 className="hero-blurb">Expat in Japan; Web Developer; Enthusiast</h2>
        </header>
      )
    } else {
      header = (
        <header>
          <nav className="nav">
            <Link to={'/'} >
              <img className="nav-logo" src={logo}></img>
            </Link>
          </nav>
        </header>
      )
    }
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
