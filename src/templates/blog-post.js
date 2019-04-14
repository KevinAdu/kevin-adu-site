import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import ReactDisqusThread from 'react-disqus-thread';
import PostMetadata from '../components/PostMetadata';

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const images = document.querySelectorAll('.article img')
    images.forEach(image => {
      const imgCaption = `<figcaption class="post-image-caption">${image.alt}</figcaption>`
      image.insertAdjacentHTML('afterend', imgCaption);
    })
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const tagsList = post.frontmatter.tags

    return <main>
        <article className="article">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h2>{post.frontmatter.title}</h2>
          <PostMetadata date={post.frontmatter.date} tags={tagsList} url={post.frontmatter.path} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </article>
        <ReactDisqusThread shortname="kevinadu" title={post.frontmatter.title} onNewComment={this.handleNewComment} />
      </main>;
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
      }
    }
  }
`
