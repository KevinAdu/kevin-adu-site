import React from 'react'
import Link from 'gatsby-link'

import "../styles/main.scss"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const header = (
      <header>
        <nav className="nav">
          <Link to={'/'} className="nav-hero">
            <h1>Kevin Adu</h1>
          </Link>
          <ul className="nav-links">
            <Link to={'/about'}>
              <li>About</li>
            </Link>
            <a href="/rss.xml">
              <li>Subscribe</li>
            </a>
          </ul>
        </nav>
        <ul className="tagline">
          <li>Expat in Japan</li>
          <li>Web Developer</li>
        </ul>
      </header>
    )

    const footer = (
      <footer className="primary-footer">
        <small>&copy; Copyright Kevin Adu {new Date().getFullYear()}</small>
      </footer>
    )

    return (
      <div>
        {header}
        {children()}
        {footer}
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
