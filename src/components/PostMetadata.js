import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/fontawesome-free-solid/faComment';
import { faClock } from '@fortawesome/fontawesome-free-regular/faClock';
import { faTags } from '@fortawesome/fontawesome-free-solid/faTags';
const kebabCase = require('lodash.kebabcase');

class PostMetadata extends React.Component {
  render() {
    const disqusUrl = `${this.props.url}#disqus_thread`;
    const tagsList = this.props.tags.map(tag => (
      <Link key={tag} to={`/tags/${kebabCase(tag)}`}>
        <li>{tag}</li>
      </Link>
    ));

    return (
      <div className="post-metadata">
        <div className="post-date">
          <FontAwesomeIcon icon={faClock} />
          <time>{this.props.date}</time>
        </div>
        <div className="post-tags">
          <FontAwesomeIcon icon={faTags} />
          <ul>{tagsList}</ul>
        </div>
      </div>
    );
  }
}

export default PostMetadata;
