import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import ReactDisqusThread from 'react-disqus-thread';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const tagsList = post.frontmatter.tags.map(tag => (<li>{tag}</li>))

    return (
      <main>
        <article className="article">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h2>{post.frontmatter.title}</h2>
          <div className="post-metadata">
            <time className="post-date">{post.frontmatter.date}</time>
            <ul className="post-tags">{tagsList}</ul>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </article>
        <ReactDisqusThread
          shortname="kevinadu"
          title={post.frontmatter.title}
          onNewComment={this.handleNewComment}/>
      </main>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
