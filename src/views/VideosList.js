import React, { Component, Fragment } from 'react';
import queryString from 'query-string';

import VideosListItem from './VideoListItem';

import { List } from '../components/List';

import { connect } from 'react-redux';
import { getAllVideos } from '../actions/video';

class VideosList extends Component {
  componentDidMount() {
    const {
      location: { search },
      getAllVideos,
    } = this.props;

    // Getting the search paramters from the url
    const parsed = queryString.parse(search);
    const description = parsed.q;

    if (description) {
      getAllVideos(description);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search },
      getAllVideos,
    } = this.props;

    // Getting the description from the url parameters
    const parsed = queryString.parse(search);
    const prevParsed = queryString.parse(prevProps.location.search);

    if (parsed.q !== prevParsed.q) {
      const description = parsed.q;

      if (description) {
        getAllVideos(description);
      }
    }
  }

  render() {
    return (
      <Fragment>
        <List small={this.props.small}>
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

export default connect(mapStateToProps, { getAllVideos })(VideosList);
