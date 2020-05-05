import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTags } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
const kebabCase = require('lodash.kebabcase');
import { CommentCount } from 'disqus-react';

class PostMetadata extends React.Component {
  render() {
    const { url, tags, date } = this.props;

    const disqusUrl = `${url}#disqus_thread`;
    const tagsList = tags.map(tag => (
      <Link key={tag} to={`/tags/${kebabCase(tag)}`}>
        <li>{tag}</li>
      </Link>
    ));

    return (
      <div className="post-metadata">
        <div className="post-date">
          <FontAwesomeIcon icon={faClock} />
          <time>{date}</time>
        </div>
        <div className="post-tags">
          <FontAwesomeIcon icon={faTags} />
          <ul>{tagsList}</ul>
        </div>
        <div className="post-comments">
          <FontAwesomeIcon icon={faComment} />
          <Link to={disqusUrl}>
            <CommentCount
              shortname="kevinadu"
              config={{
                url
              }}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default PostMetadata;
