import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/layout';
import '../styles/main.scss';

class Template extends React.Component {
  render() {
    return (
      <Layout>
        <main>
          <Helmet title={`${get(this, 'props.data.site.siteMetadata.title')} | About`} />
          <p>
            Hello my name is Kevin Adu and I'm a web developer based in Yokohama, Japan and I'm
            originally from London, England. I have been in Japan since December 2013 and I wanted a
            way to convey my thoughts and ramblings of my experiences of living in Japan into a
            blog. Mainly I write about what I experience here in Japan and how it is affects me. I
            also sometimes write about the Japanese language and about web development too.
          </p>
          <p>
            If you want to contact me outside of this blog or have a look at my open source
            projects, you can do so via the links below:
          </p>
          <ul className="social-links">
            <li>
              <a href="https://twitter.com/Kevin__Adu">
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
      </Layout>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;
