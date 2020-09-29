import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class VideoListItem extends Component {
  render() {
    return (
      <Fragment>
        <Link to={`/${this.props.video.id}`}>
          <img
            width={256}
            height={144}
            alt=''
            src={this.props.video.thumbnails.high.url}
          />
          <div>{this.props.video.title}</div>
          <div>{this.props.video.channelTitle}</div>
          <div>{this.props.video.publishedAt}</div>
          <div>{this.props.video.description}</div>
        </Link>
      </Fragment>
    );
  }
}

export default VideoListItem;
