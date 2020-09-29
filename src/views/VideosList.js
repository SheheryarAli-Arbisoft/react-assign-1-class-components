import React, { Component, Fragment } from 'react';
import VideosListItem from './VideoListItem';
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';

class VideosList extends Component {
  render() {
    return (
      <Fragment>
        Videos list
        {!this.props.video.loading &&
          this.props.video.videos.length > 0 &&
          this.props.video.videos.map((video) => (
            <VideosListItem key={uuidv4()} video={video} />
          ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
});

export default connect(mapStateToProps)(VideosList);
