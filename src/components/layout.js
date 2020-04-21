import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
const kebabCase = require('lodash.kebabcase');

import '../styles/main.scss';

function getCategoryHeaders(data) {
  const posts = data.allMarkdownRemark.edges;
  const categorySet = new Set();

  posts.forEach(post => {
    categorySet.add(post.node.frontmatter.category);
  });

  const categories = Array.from(categorySet).sort();

  return categories.map(category => (
    <Link key={category} to={`/category/${kebabCase(category)}`}>
      <li>{category}</li>
    </Link>
  ));
}

export default ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <React.Fragment>
        <header>
          <nav className="nav">
            <Link to={'/'} className="nav-hero">
              <h1>Kevin Adu</h1>
            </Link>
            <ul className="nav-links">
              {getCategoryHeaders(data)}
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
        {children}
        <footer className="primary-footer">
          <small>&copy; Copyright Kevin Adu {new Date().getFullYear()}</small>
        </footer>
      </React.Fragment>
    )}
  />
);
