import React from 'react'
import Link from 'gatsby-link'
import _ from "lodash";
import ReactDisqusCounter from 'react-disqus-counter'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'
import faClock from '@fortawesome/fontawesome-free-regular/faClock'
import faTags from '@fortawesome/fontawesome-free-solid/faTags'

class PostMetadata extends React.Component {
  render() {
    const disqusUrl = `${this.props.url}#disqus_thread`;
    const tagsList = this.props.tags.map(tag => (
      <Link key={tag} to={`/tags/${_.kebabCase(tag)}`}>
        <li>{tag}</li>
      </Link>)
    );

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
        <div className="post-comments">
          <FontAwesomeIcon icon={faComment} />
          <Link to={disqusUrl}>
            <ReactDisqusCounter
              url={this.props.url}
              shortname='kevinadu'
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default PostMetadata