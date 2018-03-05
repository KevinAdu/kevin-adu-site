import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen'
import "../styles/main.scss"

class Template extends React.Component {
  render() {
    return (
      <main>
        <Helmet title={`${get(this, 'props.data.site.siteMetadata.title')} | About`} />
        <p>
          Hello my name is Kevin Adu and I'm a web developer based in Yokohama, Japan and I'm originally from London, England.
          I have been in Japan since December 2013 and I wanted a way to convey my thoughts and ramblings of my experiences of living in Japan into a blog.
          Mainly I write about what I experience here in Japan and how it is affects me. I also sometimes write about the Japanese language and about web development too.
        </p>
        <p>
          If you want to contact me outside of this blog or have a look at my open source projects, you can do so via the links below:
        </p>
        <ul className="social-links">
          <li>
            <a href="https://twitter.com/KmanAdu">
              <FontAwesomeIcon icon={faTwitter} />
              <small>Twitter</small>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kevinadu89/">
              <FontAwesomeIcon icon={faInstagram} />
              <small>Instagram</small>
            </a>
          </li>
          <li>
            <a href="https://github.com/KevinAdu">
              <FontAwesomeIcon icon={faGithub} />
              <small>Github</small>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/KevinAdu/">
              <FontAwesomeIcon icon={faCodepen} />
              <small>Codepen</small>
            </a>
          </li>
        </ul>
      </main>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`
