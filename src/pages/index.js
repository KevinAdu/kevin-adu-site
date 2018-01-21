import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import PostMetadata from '../components/PostMetadata'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <main>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
          {posts.map(post => {
            if (post.node.path !== '/404/') {
              const tags = post.node.frontmatter.tags

              return (
                <article className="post" key={post.node.frontmatter.path}>
                  <Link className="post-title" to={post.node.frontmatter.path}>
                    <h2>{post.node.frontmatter.title}</h2>
                  </Link>
                  <PostMetadata
                    date={post.node.frontmatter.date}
                    tags={tags}
                    url={post.node.frontmatter.path}
                  />
                  <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                  <Link to={post.node.frontmatter.path}>Read More</Link>
                </article>
              )
            }
          })}
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
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          frontmatter {
            title
            }
          }
        }
      }
    }
`
