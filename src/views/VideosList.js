import React, { Component, Fragment } from 'react';

import VideosListItem from './VideoListItem';

import { connect } from 'react-redux';
import { List } from '../components/List';

class VideosList extends Component {
  render() {
    return (
      <Fragment>
        <List>
          {!this.props.video.loading &&
            this.props.video.videos.length > 0 &&
            this.props.video.videos.map((video) => (
              <VideosListItem
                key={video.id}
                video={video}
                small={this.props.small}
              />
            ))}
        </List>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
});

export default connect(mapStateToProps)(VideosList);
