import React from 'react';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Layout from '../components/layout';

class CategoryPageTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <main>
          <Helmet title={`Category - "${category}" | ${siteTitle}`} />
          <h2>{category}</h2>
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

export default CategoryPageTemplate

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark (
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
            category
          }
        }
      }
    }
  }
`
