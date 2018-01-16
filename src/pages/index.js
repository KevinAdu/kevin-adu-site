import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <main>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <div className="post-container">
          {posts.map(post => {
            if (post.node.path !== '/404/') {
              const title = get(post, 'node.frontmatter.title') || post.node.path
              return (
                <Link to={post.node.frontmatter.path} >
                  <article className="post" key={post.node.frontmatter.path}>
                    <div className="post-thumbnail">
                      <img className="post-img" src={post.node.frontmatter.thumbnail.childImageSharp.responsiveSizes.src} />
                    </div>
                    <div className="post-content">
                      <h3>{post.node.frontmatter.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                      <small>{post.node.frontmatter.date}</small>
                    </div>
                  </article>
                </Link>
              )
            }
          })}
        </div>
      </main>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                responsiveSizes(maxWidth: 400) {
                  base64
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`
