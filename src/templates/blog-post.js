import React from 'react';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import Disqus from 'disqus-react';
import PostMetadata from '../components/PostMetadata';
import Layout from '../components/layout';

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const images = document.querySelectorAll('.article img');
    images.forEach(image => {
      const imgCaption = `<figcaption class="post-image-caption">${image.alt}</figcaption>`;
      image.insertAdjacentHTML('afterend', imgCaption);
    });
  }

  render() {
    const { data } = this.props;
    const post = data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const tagsList = post.frontmatter.tags;
    const disqusShortname = 'kevinadu';
    const disqusConfig = {
      title: post.frontmatter.title
    };

    return (
      <Layout>
        <main>
          <article className="article">
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
            <h2>{post.frontmatter.title}</h2>
            <PostMetadata
              date={post.frontmatter.date}
              tags={tagsList}
              url={post.frontmatter.path}
            />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />
          </article>
          <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </main>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

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
`;
