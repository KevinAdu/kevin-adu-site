import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import get from 'lodash/get';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/fontawesome-free-solid/faTags';

class TagPageTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <main>
          <Helmet title={`Posts tagged as "${tag}" | ${siteTitle}`} />
          <h2>{tag}</h2>
          {posts.map(post => {
            return (
              <div className="post-tag-listing">
                <Link to={post.node.frontmatter.path}>
                  <h3>{post.node.frontmatter.title}</h3>
                </Link>
                <time>{post.node.frontmatter.date}</time>
              </div>
            );
          })}
        </main>
      </Layout>
    );
  }
}

export default TagPageTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
