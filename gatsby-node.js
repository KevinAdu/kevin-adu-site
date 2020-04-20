const path = require(`path`);
const kebabCase = require('lodash.kebabcase');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve('./src/templates/blog-post.js');
  const tagPage = path.resolve('./src/templates/tag-page.js');
  const categoryPage = path.resolve('./src/templates/category-page.js');
  const tagSet = new Set();
  const categorySet = new Set();
  const result = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
                tags
                category
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(post => {
    if (post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }

    if (post.node.frontmatter.category) {
      categorySet.add(post.node.frontmatter.category);
    }

    createPage({
      path: post.node.frontmatter.path,
      component: blogPost,
      context: {
        path: post.node.frontmatter.path
      }
    });

    const tagList = Array.from(tagSet);
    tagList.forEach(tag => {
      createPage({
        path: `/tags/${kebabCase(tag)}/`,
        component: tagPage,
        context: {
          tag
        }
      });
    });

    const categoryList = Array.from(categorySet);
    categoryList.forEach(category => {
      createPage({
        path: `/category/${kebabCase(category)}/`,
        component: categoryPage,
        context: {
          category
        }
      });
    });
  });
};
