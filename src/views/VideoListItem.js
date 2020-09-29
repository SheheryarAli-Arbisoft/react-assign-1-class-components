import React, { Component, Fragment } from 'react';

class VideoListItem extends Component {
  render() {
    return (
      <Fragment>
        <img
          width={256}
          height={144}
          src={this.props.video.thumbnails.maxres.url}
        />
        <div>{this.props.video.title}</div>
        <div>{this.props.video.channelTitle}</div>
        <div>{this.props.video.publishedAt}</div>
        <div>{this.props.video.description}</div>
      </Fragment>
    );
  }
}

export default VideoListItem;
