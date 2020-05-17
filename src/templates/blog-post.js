import React from 'react';
import { Helmet } from 'react-helmet';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';
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
    const { siteUrl } = data.site.siteMetadata;
    const siteTitle = data.site.siteMetadata.title;
    const post = data.markdownRemark;
    const { path, tags, excerpt, title, date } = post.frontmatter;
    const postUrl = siteUrl + path;
    const disqusShortname = 'kevinadu';
    const disqusConfig = { title };

    return (
      <Layout>
        <main>
          <article className="article">
            <Helmet title={`${title} | ${siteTitle}`} />
            <h2>{title}</h2>
            <PostMetadata date={date} tags={tags} url={path} />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />
          </article>
          <FacebookShareButton url={postUrl} quote={excerpt}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={postUrl} title={title} via={'Kevin__Adu'}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton url={postUrl} summary={excerpt} title={title} source={siteTitle}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
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
