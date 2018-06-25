import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import "../styles/main.scss"

class Template extends React.Component {
  getCategoryHeaders() {
    const { children, data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const categorySet = new Set();

    posts.forEach(post => {
      categorySet.add(post.node.frontmatter.category);
    });

    const categories = Array.from(categorySet).sort();

    return categories.map(category => (
      <Link key={category} to={`/category/${_.kebabCase(category)}`}>
        <li>{category}</li>
      </Link>
    ));
  }

  render() {
    const { location, children } = this.props

    const header = (
      <header>
        <nav className="nav">
          <Link to={'/'} className="nav-hero">
            <h1>Kevin Adu</h1>
          </Link>
          <ul className="nav-links">
            {this.getCategoryHeaders()}
            <Link to={'/about'}>
              <li>About</li>
            </Link>
            <a href="/rss.xml">
              <li>RSS Feed</li>
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

export const query = graphql`
  query LayoutQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            category
          }
        }
      }
    }
  }
`